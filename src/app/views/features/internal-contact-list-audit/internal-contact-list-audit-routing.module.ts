import { InternalContactListAuditComponent } from './internal-contact-list-audit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'',component:InternalContactListAuditComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactListAuditRoutingModule { }
