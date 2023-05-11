import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListAuditEditDialogComponent } from './internal-contact-list-audit-edit-dialog.component';

describe('InternalContactListAuditEditDialogComponent', () => {
  let component: InternalContactListAuditEditDialogComponent;
  let fixture: ComponentFixture<InternalContactListAuditEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListAuditEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListAuditEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
