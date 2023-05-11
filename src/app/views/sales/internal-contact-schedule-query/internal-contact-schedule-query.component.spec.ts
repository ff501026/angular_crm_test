import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactScheduleQueryComponent } from './internal-contact-schedule-query.component';

describe('InternalContactScheduleQueryComponent', () => {
  let component: InternalContactScheduleQueryComponent;
  let fixture: ComponentFixture<InternalContactScheduleQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactScheduleQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactScheduleQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
