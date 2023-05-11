import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalContactListEditRoutingModule } from './internal-contact-list-edit-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactListEditDialogComponent } from './internal-contact-list-edit-dialog/internal-contact-list-edit-dialog.component';
@NgModule({
  declarations: [
    InternalContactListEditDialogComponent
  ],
  imports: [
    CommonModule,
    InternalContactListEditRoutingModule,
    SharedModule
  ]
})
export class InternalContactListEditModule { }
