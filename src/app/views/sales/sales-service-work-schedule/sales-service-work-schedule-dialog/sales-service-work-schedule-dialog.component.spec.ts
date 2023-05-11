import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesServiceWorkScheduleDialogComponent } from './sales-service-work-schedule-dialog.component';

describe('SalesServiceWorkScheduleDialogComponent', () => {
  let component: SalesServiceWorkScheduleDialogComponent;
  let fixture: ComponentFixture<SalesServiceWorkScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesServiceWorkScheduleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesServiceWorkScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
