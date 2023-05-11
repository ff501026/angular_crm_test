import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListEditDialogComponent } from './internal-contact-list-edit-dialog.component';

describe('InternalContactListEditDialogComponent', () => {
  let component: InternalContactListEditDialogComponent;
  let fixture: ComponentFixture<InternalContactListEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
