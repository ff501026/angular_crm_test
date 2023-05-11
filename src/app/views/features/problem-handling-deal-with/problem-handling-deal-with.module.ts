import { ProblemHandlingDealWithRoutingModule } from './problem-handling-deal-with-routing.module';
import { ProblemHandlingDealWithComponent } from './problem-handling-deal-with.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProblemHandlingDealWithEditDialogComponent } from './problem-handling-deal-with-edit-dialog/problem-handling-deal-with-edit-dialog.component';


@NgModule({
  declarations: [
    ProblemHandlingDealWithComponent,
    ProblemHandlingDealWithEditDialogComponent
  ],
  imports: [
    CommonModule,
    ProblemHandlingDealWithRoutingModule,
    SharedModule
  ]
})
export class ProblemHandlingDealWithModule { }
