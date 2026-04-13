import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedRoutesContainer } from './protected-routes-container';

describe('ProtectedRoutesContainer', () => {
  let component: ProtectedRoutesContainer;
  let fixture: ComponentFixture<ProtectedRoutesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedRoutesContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectedRoutesContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
