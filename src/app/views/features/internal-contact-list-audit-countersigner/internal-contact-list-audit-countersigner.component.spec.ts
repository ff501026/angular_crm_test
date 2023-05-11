import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListAuditCountersignerComponent } from './internal-contact-list-audit-countersigner.component';

describe('InternalContactListAuditCountersignerComponent', () => {
  let component: InternalContactListAuditCountersignerComponent;
  let fixture: ComponentFixture<InternalContactListAuditCountersignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListAuditCountersignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListAuditCountersignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
