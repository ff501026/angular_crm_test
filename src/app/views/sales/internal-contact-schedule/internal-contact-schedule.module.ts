import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalContactScheduleComponent } from './internal-contact-schedule.component';
import { InternalContactScheduleRoutingModule } from './internal-contact-schedule-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InternalContactScheduleComponent
  ],
  imports: [
    CommonModule,
    InternalContactScheduleRoutingModule,
    SharedModule
  ]
})
export class InternalContactScheduleModule { }
