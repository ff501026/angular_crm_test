import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactSchedulePomEditComponent } from './internal-contact-schedule-pom-edit.component';

describe('InternalContactSchedulePomEditComponent', () => {
  let component: InternalContactSchedulePomEditComponent;
  let fixture: ComponentFixture<InternalContactSchedulePomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactSchedulePomEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactSchedulePomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
