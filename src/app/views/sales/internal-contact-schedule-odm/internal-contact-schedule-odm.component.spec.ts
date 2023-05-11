import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactScheduleOdmComponent } from './internal-contact-schedule-odm.component';

describe('InternalContactScheduleOdmComponent', () => {
  let component: InternalContactScheduleOdmComponent;
  let fixture: ComponentFixture<InternalContactScheduleOdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactScheduleOdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactScheduleOdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
