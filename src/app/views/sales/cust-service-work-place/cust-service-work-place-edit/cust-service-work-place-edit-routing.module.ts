import { NgModule } from '@angular/core';
import { CustServiceWorkPlaceEditComponent } from './cust-service-work-place-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CustServiceWorkPlaceEditComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustServiceWorkPlaceEditRoutingModule { }
