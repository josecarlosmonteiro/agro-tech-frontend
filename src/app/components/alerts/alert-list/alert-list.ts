import { Component, inject, input, output } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { AlertDetails, AlertStatus } from '../../../models/alert.model';
import { DialogControlService } from '../../../services/dialog/dialog-control.service';
import { JustifiedAlert } from '../justified-alert/justified-alert';

@Component({
  selector: 'app-alert-list',
  imports: [DatePipe, NgClass],
  templateUrl: './alert-list.html',
  styleUrl: './alert-list.css',
})
export class AlertList {
  alertList = input.required<AlertDetails[]>();
  onEditAlert = output<AlertDetails>();

  private dialogService = inject(DialogControlService);

  editAlert(alert: AlertDetails) {
    this.onEditAlert.emit(alert);
  }

  showAlert(alert: AlertDetails) {
    this.dialogService.open(JustifiedAlert, { data: alert });
  }

  alertIsActive(alert: AlertDetails) {
    if (alert.status === AlertStatus.ACTIVE) this.editAlert(alert);
    else this.showAlert(alert);
  }

  getStatusIcon(status: AlertStatus) {
    if (status === AlertStatus.ACTIVE) return '🔴';
    return '🟢';
  }
}
