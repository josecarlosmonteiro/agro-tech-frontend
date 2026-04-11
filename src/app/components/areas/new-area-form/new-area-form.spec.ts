import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAreaForm } from './new-area-form';

describe('NewAreaForm', () => {
  let component: NewAreaForm;
  let fixture: ComponentFixture<NewAreaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAreaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NewAreaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
