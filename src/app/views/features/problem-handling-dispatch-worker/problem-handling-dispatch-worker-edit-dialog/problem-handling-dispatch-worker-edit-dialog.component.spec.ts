import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingDispatchWorkerEditDialogComponent } from './problem-handling-dispatch-worker-edit-dialog.component';

describe('ProblemHandlingDispatchWorkerEditDialogComponent', () => {
  let component: ProblemHandlingDispatchWorkerEditDialogComponent;
  let fixture: ComponentFixture<ProblemHandlingDispatchWorkerEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingDispatchWorkerEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingDispatchWorkerEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
