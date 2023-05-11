import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationApplyComponent } from './quotation-apply.component';

describe('QuotationApplyComponent', () => {
  let component: QuotationApplyComponent;
  let fixture: ComponentFixture<QuotationApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
