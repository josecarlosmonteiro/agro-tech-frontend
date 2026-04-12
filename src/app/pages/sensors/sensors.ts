import { Component, computed, inject, OnInit } from '@angular/core';
import { DialogControlService } from '../../services/dialog/dialog-control.service';
import { CreateSensorForm } from '../../components/sensors/create-sensor-form/create-sensor-form';
import { SensorService } from '../../services/sensors/sensor-service';
import { SensorModel, SensorType } from '../../models/sensor.model';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { UpdateSensorForm } from '../../components/sensors/update-sensor-form/update-sensor-form';
import { AreaService } from '../../services/area/area.service';
import { JsonPipe } from '@angular/common';
import { metricsMap } from '../../utils/metrics';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.html',
  styleUrl: './sensors.css',
})
export class Sensors implements OnInit {
  private areasService = inject(AreaService);
  private sensorsService = inject(SensorService);
  private dialogControlService = inject(DialogControlService);
  private notificationService = inject(NotificationsService);

  private areas = this.areasService.areas;
  private sensors = this.sensorsService.sensors;

  getMetric(type: SensorType): string {
    return metricsMap[type];
  }

  areasWithSensors = computed(() => {
    return this.areas().map(area => ({
      ...area,
      sensors: this.sensors().filter(el => el.areaId === area.id)
    })).filter(el => el.sensors.length);
  })

  ngOnInit(): void {
    this.areasService.findAll().subscribe();
    this.sensorsService.findAll().subscribe();
  }

  newSensorDialog() {
    this.dialogControlService.open(CreateSensorForm).subscribe();
  }

  createSensor(newSensor: Partial<SensorModel>) {
    this.sensorsService.create(newSensor).subscribe({
      next: () => {
        this.sensorsService.findAll();
        this.notificationService.success({ title: 'Sensor registrado com sucesso!' });
      },
      error: err => this.notificationService.error({ title: 'Erro ao registrar sensor', description: err.message })
    });
  }

  createSensorDialog() {
    this.dialogControlService.open(CreateSensorForm).subscribe((result: SensorModel) => {
      if (result) this.createSensor(result);
    })
  }

  updateSensor(newSensorData: Partial<SensorModel>) {
    if (!newSensorData.id) return this.notificationService.error({
      title: 'Erro no processamento de dados do sensor',
      description: 'Tente novamente mais tarde.',
    });

    this.sensorsService.update(newSensorData).subscribe({
      next: () => this.notificationService.success({ title: "Sensor atualizado com sucesso!" }),
      error: err => this.notificationService.error({
        title: 'Erro ao atualizar sensor',
        description: err.message,
      })
    })
  }

  updateSensorDialog(sensor: SensorModel) {
    this.dialogControlService
      .open(UpdateSensorForm, { data: sensor })
      .subscribe((result: SensorModel) => {
        if (result) this.updateSensor(result);
      })
  }

  removeSensor(sensorId: string) {
    if (!sensorId) return this.notificationService.error({
      title: 'Erro no processamento de dados do sensor',
      description: 'Tente novamente mais tarde',
    });

    this.sensorsService.delete(sensorId).subscribe({
      next: () => this.notificationService.success({ title: 'Sensor removido com sucesso!' }),
      error: err => this.notificationService.error({
        title: 'Erro ao remover sensor',
        description: err.message,
      })
    })
  }

  removeSensorDialog(sensor: SensorModel) {
    this.notificationService.confirmation({
      title: `Tem certeza de que deseja remover todos os sensores de "${sensor.type}"?`,
      description: 'Esta opção não pode ser desfeita!',
      isDanger: true,
    }).subscribe((result: string) => {
      if (result) this.removeSensor(sensor.id);
    })
  }
}
