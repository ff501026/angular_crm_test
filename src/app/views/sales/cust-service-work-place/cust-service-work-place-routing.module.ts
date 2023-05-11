import { NgModule } from '@angular/core';
import { CustServiceWorkPlaceComponent } from './cust-service-work-place.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CustServiceWorkPlaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustServiceWorkPlaceRoutingModule { }
