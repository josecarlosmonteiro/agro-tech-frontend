import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAreaForm } from './update-area-form';

describe('UpdateAreaForm', () => {
  let component: UpdateAreaForm;
  let fixture: ComponentFixture<UpdateAreaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAreaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateAreaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
