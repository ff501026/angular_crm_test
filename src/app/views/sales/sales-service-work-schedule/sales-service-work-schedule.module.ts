import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesServiceWorkScheduleComponent } from './sales-service-work-schedule.component';
import { SalesServiceWorkScheduleRoutingModule } from './sales-service-work-schedule-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesServiceWorkScheduleDialogComponent } from './sales-service-work-schedule-dialog/sales-service-work-schedule-dialog.component';

@NgModule({
  declarations: [
    SalesServiceWorkScheduleComponent,
    SalesServiceWorkScheduleDialogComponent
  ],
  imports: [
    CommonModule,
    SalesServiceWorkScheduleRoutingModule,
    SharedModule
  ]
})
export class SalesServiceWorkScheduleModule { }
