import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesServiceWorkScheduleComponent } from './sales-service-work-schedule.component';

describe('SalesServiceWorkScheduleComponent', () => {
  let component: SalesServiceWorkScheduleComponent;
  let fixture: ComponentFixture<SalesServiceWorkScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesServiceWorkScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesServiceWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
