import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AreaService } from '../../../services/area/area.service';
import { SensorType } from '../../../models/sensor.model';

@Component({
  selector: 'app-update-sensor-form',
  imports: [ReactiveFormsModule],
  templateUrl: './update-sensor-form.html',
  styleUrl: './update-sensor-form.css',
})
export class UpdateSensorForm implements OnInit {
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
