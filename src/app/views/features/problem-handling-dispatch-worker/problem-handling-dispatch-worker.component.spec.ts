import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingDispatchWorkerComponent } from './problem-handling-dispatch-worker.component';

describe('ProblemHandlingDispatchWorkerComponent', () => {
  let component: ProblemHandlingDispatchWorkerComponent;
  let fixture: ComponentFixture<ProblemHandlingDispatchWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingDispatchWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingDispatchWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
