import { ProblemHandlingDispatchWorkerComponent } from './problem-handling-dispatch-worker.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'',component:ProblemHandlingDispatchWorkerComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemHandlingDispatchWorkerRoutingModule { }
