import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AreaService } from '../../../services/area/area.service';
import { SensorModel, SensorType } from '../../../models/sensor.model';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-sensor-form',
  imports: [ReactiveFormsModule, MatDialogClose],
  templateUrl: './update-sensor-form.html',
  styleUrl: './update-sensor-form.css',
})
export class UpdateSensorForm implements OnInit {
  private fb = inject(FormBuilder);
  private areasService = inject(AreaService);
  private data: SensorModel = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<UpdateSensorForm>);

  ngOnInit(): void {
    this.getAreas();
  }

  areas = this.areasService.areas;
  sensorTypeOptions = Object.values(SensorType);

  getAreas() {
    this.areasService.findAll().subscribe();
  }

  formGroup = this.fb.group({
    type: [this.data.type, SensorType],
    areaId: [this.data.areaId, Validators.required],
    min: [this.data.min, Validators.required],
    max: [this.data.max, Validators.required],
  });

  submitForm() {
    this.dialogRef.close({
      ...this.data,
      ...this.formGroup.value
    });
  }
}
