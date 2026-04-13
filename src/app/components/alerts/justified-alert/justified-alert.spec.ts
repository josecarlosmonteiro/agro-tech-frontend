import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifiedAlert } from './justified-alert';

describe('JustifiedAlert', () => {
  let component: JustifiedAlert;
  let fixture: ComponentFixture<JustifiedAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustifiedAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(JustifiedAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
