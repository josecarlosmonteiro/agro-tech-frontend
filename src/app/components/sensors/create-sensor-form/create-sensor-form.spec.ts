import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSensorForm } from './create-sensor-form';

describe('CreateSensorForm', () => {
  let component: CreateSensorForm;
  let fixture: ComponentFixture<CreateSensorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSensorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSensorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
