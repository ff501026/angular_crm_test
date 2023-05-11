import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContactSchedulePomComponent } from './internal-contact-schedule-pom.component';

describe('InternalContactSchedulePomComponent', () => {
  let component: InternalContactSchedulePomComponent;
  let fixture: ComponentFixture<InternalContactSchedulePomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalContactSchedulePomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContactSchedulePomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
