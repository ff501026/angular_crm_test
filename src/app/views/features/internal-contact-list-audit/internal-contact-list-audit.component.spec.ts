import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListAuditComponent } from './internal-contact-list-audit.component';

describe('InternalContactListAuditComponent', () => {
  let component: InternalContactListAuditComponent;
  let fixture: ComponentFixture<InternalContactListAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
