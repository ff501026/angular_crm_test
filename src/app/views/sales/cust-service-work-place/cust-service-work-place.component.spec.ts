import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustServiceWorkPlaceComponent } from './cust-service-work-place.component';

describe('CustServiceWorkPlaceComponent', () => {
  let component: CustServiceWorkPlaceComponent;
  let fixture: ComponentFixture<CustServiceWorkPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustServiceWorkPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustServiceWorkPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
