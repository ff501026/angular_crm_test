import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustServiceWorkPlaceComponent } from './cust-service-work-place.component';
import { CustServiceWorkPlaceRoutingModule } from './cust-service-work-place-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustServiceWorkPlaceEditComponent } from './cust-service-work-place-edit/cust-service-work-place-edit.component';
import { CustServiceWorkPlaceNewComponent } from './cust-service-work-place-new/cust-service-work-place-new.component';


@NgModule({
  declarations: [
    CustServiceWorkPlaceComponent,
    CustServiceWorkPlaceEditComponent,
    CustServiceWorkPlaceNewComponent
  ],
  imports: [
    CommonModule,
    CustServiceWorkPlaceRoutingModule,
    SharedModule
  ]
})
export class CustServiceWorkPlaceModule { }
