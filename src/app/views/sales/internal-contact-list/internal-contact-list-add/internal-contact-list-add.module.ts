import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalContactListAddComponent } from './internal-contact-list-add.component';
import { InternalContactListAddRoutingModule } from './internal-contact-list-add-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InternalContactListAddRoutingModule,
    SharedModule
  ]
})
export class InternalContactListAddModule { }
