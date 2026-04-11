import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAreaConfirmation } from './remove-area-confirmation';

describe('RemoveAreaConfirmation', () => {
  let component: RemoveAreaConfirmation;
  let fixture: ComponentFixture<RemoveAreaConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveAreaConfirmation],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveAreaConfirmation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
