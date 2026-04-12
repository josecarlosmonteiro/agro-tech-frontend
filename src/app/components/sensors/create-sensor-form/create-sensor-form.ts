import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SensorModel, SensorType } from '../../../models/sensor.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogClose } from '@angular/material/dialog';
import { NotificationsService } from '../../../services/notifications/notifications.service';
import { AreaService } from '../../../services/area/area.service';

@Component({
  selector: 'app-create-sensor-form',
  imports: [ReactiveFormsModule, MatDialogClose],
  templateUrl: './create-sensor-form.html',
  styleUrl: './create-sensor-form.css',
})
export class CreateSensorForm implements OnInit {
  private fb = inject(FormBuilder);
  private areasService = inject(AreaService);

  ngOnInit(): void {
    this.getAreas();
  }

  areas = this.areasService.areas;
  sensorTypeOptions = Object.values(SensorType);

  getAreas() {
    this.areasService.findAll().subscribe();
  }

  formGroup = this.fb.group({
    name: ['', Validators.required],
    type: ['', SensorType],
    areaId: ['', Validators.required],
    min: [0, Validators.required],
    max: [0, Validators.required],
  });

  submitForm() {
    console.log(this.formGroup.value);
  }
}
