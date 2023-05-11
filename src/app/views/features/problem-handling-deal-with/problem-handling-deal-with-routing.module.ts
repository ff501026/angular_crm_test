import { ProblemHandlingDealWithComponent } from './problem-handling-deal-with.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'',component:ProblemHandlingDealWithComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemHandlingDealWithRoutingModule { }
