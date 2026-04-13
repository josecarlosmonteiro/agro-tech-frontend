import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { AlertDetails } from '../../../models/alert.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-justified-alert',
  imports: [DatePipe, MatDialogClose],
  templateUrl: './justified-alert.html',
  styleUrl: './justified-alert.css',
})
export class JustifiedAlert {
  data: AlertDetails = inject(MAT_DIALOG_DATA);
}
