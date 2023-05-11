import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustServiceWorkPlaceEditComponent } from './cust-service-work-place-edit.component';

describe('CustServiceWorkPlaceEditComponent', () => {
  let component: CustServiceWorkPlaceEditComponent;
  let fixture: ComponentFixture<CustServiceWorkPlaceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustServiceWorkPlaceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustServiceWorkPlaceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
