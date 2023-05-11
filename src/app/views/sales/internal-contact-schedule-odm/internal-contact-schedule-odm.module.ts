import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalContactScheduleOdmComponent } from './internal-contact-schedule-odm.component';
import { InternalContactScheduleOdmRoutingModule } from './internal-contact-schedule-odm-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactScheduleOdmEditComponent } from './internal-contact-schedule-odm-edit/internal-contact-schedule-odm-edit.component';

@NgModule({
  declarations: [
   InternalContactScheduleOdmComponent,
   InternalContactScheduleOdmEditComponent
  ],
  imports: [
    CommonModule,
    InternalContactScheduleOdmRoutingModule,
    SharedModule
  ]
})
export class InternalContactScheduleOdmModule { }
