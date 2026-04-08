import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAreaCard } from './dashboard-area-card';

describe('DashboardAreaCard', () => {
  let component: DashboardAreaCard;
  let fixture: ComponentFixture<DashboardAreaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAreaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAreaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
