import { InternalContactListAuditCountersignerComponent } from './../internal-contact-list-audit-countersigner.component';
import { InternalContactListAuditCountersignerEditRoutingModule } from './internal-contact-list-audit-countersigner-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InternalContactListAuditCountersignerEditRoutingModule,
    SharedModule
  ]
})
export class InternalContactListAuditCountersignerEditModule { }
