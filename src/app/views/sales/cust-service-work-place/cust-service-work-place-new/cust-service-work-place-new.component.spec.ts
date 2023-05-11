import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustServiceWorkPlaceNewComponent } from './cust-service-work-place-new.component';

describe('CustServiceWorkPlaceNewComponent', () => {
  let component: CustServiceWorkPlaceNewComponent;
  let fixture: ComponentFixture<CustServiceWorkPlaceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustServiceWorkPlaceNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustServiceWorkPlaceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
