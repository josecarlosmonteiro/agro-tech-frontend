import { Component, inject } from '@angular/core';
import { TErrorNotificationDialog } from '../../../types/shared/ErrorNotificationDialog';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  imports: [MatDialogClose],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.css',
})
export class ErrorDialog {
  data: TErrorNotificationDialog = inject(MAT_DIALOG_DATA);
}
