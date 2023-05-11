import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingEditDialogComponent } from './problem-handling-edit-dialog.component';

describe('ProblemHandlingEditDialogComponent', () => {
  let component: ProblemHandlingEditDialogComponent;
  let fixture: ComponentFixture<ProblemHandlingEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
