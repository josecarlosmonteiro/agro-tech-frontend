import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TConfirmationDialog, TNotificationDialog } from '../../types/shared/NotificationDialog';
import { SuccessDialog } from '../../components/notifications/success-dialog/success-dialog';
import { ErrorDialog } from '../../components/notifications/error-dialog/error-dialog';
import { ConfirmationDialog } from '../../components/notifications/confirmation-dialog/confirmation-dialog';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private readonly dialog = inject(MatDialog);

  success(data: TNotificationDialog) {
    this.dialog.open(SuccessDialog, {
      data,
    })
  }

  error(data: TNotificationDialog) {
    this.dialog.open(ErrorDialog, {
      data,
    })
  }

  confirmation(data: TConfirmationDialog) {
    this.dialog.open(ConfirmationDialog, {
      data,
    }).afterClosed().subscribe(confirm => {
      if (confirm && data.onConfirm) data.onConfirm();
    })
  }
}
