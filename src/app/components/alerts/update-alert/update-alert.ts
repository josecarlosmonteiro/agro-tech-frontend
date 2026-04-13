import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from '../../../services/notifications/notifications.service';

@Component({
  selector: 'app-update-alert',
  imports: [ReactiveFormsModule, DatePipe, MatDialogClose],
  templateUrl: './update-alert.html',
  styleUrl: './update-alert.css',
})
export class UpdateAlert {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<UpdateAlert>);
  private notificationService = inject(NotificationsService);

  data = inject(MAT_DIALOG_DATA);

  formGroup = this.fb.group({
    justification: ['', Validators.required],
  });

  submitForm() {
    if (!this.formGroup.valid) {
      this.notificationService.error({
        title: 'Preencha corretamente os dados de fechamento do alerta',
      });
      return;
    }

    this.dialogRef.close(this.formGroup.value);
  }
}
