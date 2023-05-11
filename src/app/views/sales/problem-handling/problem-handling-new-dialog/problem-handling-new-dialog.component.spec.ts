import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingNewDialogComponent } from './problem-handling-new-dialog.component';

describe('ProblemHandlingNewDialogComponent', () => {
  let component: ProblemHandlingNewDialogComponent;
  let fixture: ComponentFixture<ProblemHandlingNewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingNewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
