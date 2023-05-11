import { NgModule } from '@angular/core';
import { CustServiceWorkPlaceNewComponent } from './cust-service-work-place-new.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CustServiceWorkPlaceNewComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustServiceWorkPlaceNewRoutingModule { }
