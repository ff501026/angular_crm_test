import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactScheduleComponent } from './internal-contact-schedule.component';

describe('InternalContactScheduleComponent', () => {
  let component: InternalContactScheduleComponent;
  let fixture: ComponentFixture<InternalContactScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
