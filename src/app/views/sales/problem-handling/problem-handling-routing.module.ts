import { NgModule } from '@angular/core';
import { ProblemHandlingComponent } from './problem-handling.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProblemHandlingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemHandlingRoutingModule { }
