import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListAuditEditComponent } from './internal-contact-list-audit-edit.component';

describe('InternalContactListAuditEditComponent', () => {
  let component: InternalContactListAuditEditComponent;
  let fixture: ComponentFixture<InternalContactListAuditEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListAuditEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListAuditEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
