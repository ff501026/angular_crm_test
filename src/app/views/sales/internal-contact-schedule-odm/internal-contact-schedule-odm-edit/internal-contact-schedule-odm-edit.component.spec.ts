import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactScheduleOdmEditComponent } from './internal-contact-schedule-odm-edit.component';

describe('InternalContactScheduleOdmEditComponent', () => {
  let component: InternalContactScheduleOdmEditComponent;
  let fixture: ComponentFixture<InternalContactScheduleOdmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactScheduleOdmEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactScheduleOdmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
