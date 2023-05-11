import { InternalContactListClosedComponent } from './internal-contact-list-closed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'',component:InternalContactListClosedComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactListClosedRoutingModule { }
