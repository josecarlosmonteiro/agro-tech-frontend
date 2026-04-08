import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounded } from './not-founded';

describe('NotFounded', () => {
  let component: NotFounded;
  let fixture: ComponentFixture<NotFounded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFounded],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFounded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
