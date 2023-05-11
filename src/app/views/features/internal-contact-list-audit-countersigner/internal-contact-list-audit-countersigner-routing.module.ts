import { InternalContactListAuditCountersignerComponent } from './internal-contact-list-audit-countersigner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'',component:InternalContactListAuditCountersignerComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactListAuditCountersignerRoutingModule { }
