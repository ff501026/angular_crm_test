import { InternalContactScheduleOdmComponent } from './internal-contact-schedule-odm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: InternalContactScheduleOdmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactScheduleOdmRoutingModule { }
