import { Component, computed, inject, OnInit } from '@angular/core';
import { AlertList } from '../../components/alerts/alert-list/alert-list';
import { AlertService } from '../../services/alert/alert.service';
import { SensorService } from '../../services/sensors/sensor-service';
import { AreaService } from '../../services/area/area.service';
import { AlertDetails, AlertModel, AlertStatus } from '../../models/alert.model';
import { DialogControlService } from '../../services/dialog/dialog-control.service';
import { UpdateAlert } from '../../components/alerts/update-alert/update-alert';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-alerts',
  imports: [AlertList],
  templateUrl: './alerts.html',
  styleUrl: './alerts.css',
})
export class Alerts implements OnInit {
  private alertService = inject(AlertService);
  private sensorService = inject(SensorService);
  private areaService = inject(AreaService);
  private dialogService = inject(DialogControlService);
  private notificationService = inject(NotificationsService);

  alertList = computed(() => {
    const areas = this.areaService.areas();
    const sensors = this.sensorService.sensors();

    const areasMap = Object.fromEntries(areas.map(a => [a.id, a]));
    const sensorsMap = Object.fromEntries(sensors.map(s => [s.id, s]));

    return this.alertService.alertsList().map(alert => {
      const sensor = sensorsMap[alert.sensorId];
      const area = sensor ? areasMap[sensor.areaId] : null;

      return {
        id: alert.id,
        message: alert.message,
        sensorName: sensorsMap[alert.sensorId]?.type ?? 'Não encontrado',
        areaName: area ? area.name : 'Não encontrado',
        status: alert.status,
        triggeredAt: alert.triggeredAt ?? '',
        resolvedAt: alert.resolvedAt ?? '',
        justification: alert.justification,
      };
    });
  });

  ngOnInit(): void {
    this.areaService.findAll().subscribe();
    this.sensorService.findAll().subscribe();
    this.alertService.findAll().subscribe();
  }

  updateAlert(alert: AlertModel, justification: string) {
    this.alertService.update({ ...alert, justification, status: AlertStatus.RESOLVED }).subscribe({
      next: () => {
        this.notificationService.success({ title: 'Alerta resolvido!' });
        this.alertService.findAll();
      },
      error: err =>
        this.notificationService.error({
          title: 'Erro ao tentar atualizar notificação',
          description: err.message,
        }),
    });
  }

  updateAlertDialog(alert: AlertDetails) {
    if (alert.status !== AlertStatus.ACTIVE) return;

    this.dialogService.open(UpdateAlert, { data: alert }).subscribe({
      next: result => {
        if (!result) return;

        const previousAlert = this.alertService.alertsList().find(el => el.id === alert.id);

        if (!previousAlert) throw new Error('Erro ao buscar referência de notificação.');

        this.updateAlert(previousAlert, result.justification);
      },
    });
  }
}
