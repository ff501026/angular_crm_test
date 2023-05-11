import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingComponent } from './problem-handling.component';

describe('ProblemHandlingComponent', () => {
  let component: ProblemHandlingComponent;
  let fixture: ComponentFixture<ProblemHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
