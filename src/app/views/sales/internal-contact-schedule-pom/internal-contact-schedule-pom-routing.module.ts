import { InternalContactSchedulePomComponent } from './internal-contact-schedule-pom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: InternalContactSchedulePomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactSchedulePomRoutingModule { }
