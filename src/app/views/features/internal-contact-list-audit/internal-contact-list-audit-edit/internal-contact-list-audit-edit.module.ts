import { InternalContactListAuditEditRoutingModule } from './internal-contact-list-audit-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactListAuditEditDialogComponent } from './internal-contact-list-audit-edit-dialog/internal-contact-list-audit-edit-dialog.component';


@NgModule({
  declarations: [
    InternalContactListAuditEditDialogComponent
  ],
  imports: [
    CommonModule,
    InternalContactListAuditEditRoutingModule,
    SharedModule
  ]
})
export class InternalContactListAuditEditModule { }
