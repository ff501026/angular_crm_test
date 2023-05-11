import { InternalContactListAuditCountersignerRoutingModule } from './internal-contact-list-audit-countersigner-routing.module';
import { InternalContactListAuditCountersignerComponent } from './internal-contact-list-audit-countersigner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactListAuditCountersignerEditComponent } from './internal-contact-list-audit-countersigner-edit/internal-contact-list-audit-countersigner-edit.component';



@NgModule({
  declarations: [
    InternalContactListAuditCountersignerComponent,
    InternalContactListAuditCountersignerEditComponent,
  ],
  imports: [
    CommonModule,
    InternalContactListAuditCountersignerRoutingModule,
    SharedModule
  ]
})
export class InternalContactListAuditCountersignerModule { }
