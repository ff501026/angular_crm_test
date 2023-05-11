import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListClosedEditComponent } from './internal-contact-list-closed-edit.component';

describe('InternalContactListClosedEditComponent', () => {
  let component: InternalContactListClosedEditComponent;
  let fixture: ComponentFixture<InternalContactListClosedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListClosedEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListClosedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
