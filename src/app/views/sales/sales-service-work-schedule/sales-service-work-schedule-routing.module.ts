import { NgModule } from '@angular/core';
import { SalesServiceWorkScheduleComponent } from './sales-service-work-schedule.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SalesServiceWorkScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesServiceWorkScheduleRoutingModule { }
