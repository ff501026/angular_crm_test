import { InternalContactListAuditCountersignerEditComponent } from './internal-contact-list-audit-countersigner-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: InternalContactListAuditCountersignerEditComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactListAuditCountersignerEditRoutingModule { }
