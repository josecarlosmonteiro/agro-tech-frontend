import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TNotificationDialog } from '../../../types/shared/NotificationDialog';

@Component({
  selector: 'app-success-dialog',
  imports: [],
  templateUrl: './success-dialog.html',
  styleUrl: './success-dialog.css',
})
export class SuccessDialog {
  data: TNotificationDialog = inject(MAT_DIALOG_DATA);
}
