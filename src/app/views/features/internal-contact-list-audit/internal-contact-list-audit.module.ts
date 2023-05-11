import { InternalContactListAuditComponent } from './internal-contact-list-audit.component';
import { InternalContactListAuditRoutingModule } from './internal-contact-list-audit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactListAuditEditComponent } from './internal-contact-list-audit-edit/internal-contact-list-audit-edit.component';


@NgModule({
  declarations: [
    InternalContactListAuditComponent,
    InternalContactListAuditEditComponent,
  ],
  imports: [
    CommonModule,
    InternalContactListAuditRoutingModule,
    SharedModule
  ]
})
export class InternalContactListAuditModule { }
