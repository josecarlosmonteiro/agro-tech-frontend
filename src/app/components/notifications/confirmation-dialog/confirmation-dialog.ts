import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { TConfirmationDialogProps } from '../../../types/shared/ConfirmationDialog';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogClose],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.css',
})
export class ConfirmationDialog {
  data: TConfirmationDialogProps = inject(MAT_DIALOG_DATA);
}
