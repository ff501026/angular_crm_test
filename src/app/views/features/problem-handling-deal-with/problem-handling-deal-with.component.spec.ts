import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlingDealWithComponent } from './problem-handling-deal-with.component';

describe('ProblemHandlingDealWithComponent', () => {
  let component: ProblemHandlingDealWithComponent;
  let fixture: ComponentFixture<ProblemHandlingDealWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHandlingDealWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlingDealWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
