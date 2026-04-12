import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSensorForm } from './update-sensor-form';

describe('UpdateSensorForm', () => {
  let component: UpdateSensorForm;
  let fixture: ComponentFixture<UpdateSensorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSensorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSensorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
