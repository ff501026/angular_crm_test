import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalContactScheduleQueryComponent } from './internal-contact-schedule-query.component';
import { InternalContactScheduleQueryRoutingModule } from './internal-contact-schedule-query-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InternalContactScheduleQueryComponent
  ],
  imports: [
    CommonModule,
    InternalContactScheduleQueryRoutingModule,
    SharedModule
  ]
})
export class InternalContactScheduleQueryModule { }
