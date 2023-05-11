import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactListClosedComponent } from './internal-contact-list-closed.component';

describe('InternalContactListClosedComponent', () => {
  let component: InternalContactListClosedComponent;
  let fixture: ComponentFixture<InternalContactListClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactListClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactListClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
