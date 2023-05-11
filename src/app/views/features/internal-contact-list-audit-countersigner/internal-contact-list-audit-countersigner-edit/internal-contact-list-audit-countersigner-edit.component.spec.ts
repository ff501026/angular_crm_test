import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListAuditCountersignerEditComponent } from './internal-contact-list-audit-countersigner-edit.component';

describe('InternalContactListAuditCountersignerEditComponent', () => {
  let component: InternalContactListAuditCountersignerEditComponent;
  let fixture: ComponentFixture<InternalContactListAuditCountersignerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListAuditCountersignerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListAuditCountersignerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
