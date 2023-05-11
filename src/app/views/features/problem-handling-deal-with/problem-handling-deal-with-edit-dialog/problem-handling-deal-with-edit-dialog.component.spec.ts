import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingDealWithEditDialogComponent } from './problem-handling-deal-with-edit-dialog.component';

describe('ProblemHandlingDealWithEditDialogComponent', () => {
  let component: ProblemHandlingDealWithEditDialogComponent;
  let fixture: ComponentFixture<ProblemHandlingDealWithEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingDealWithEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingDealWithEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
