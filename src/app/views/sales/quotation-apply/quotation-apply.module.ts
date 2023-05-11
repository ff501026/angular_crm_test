import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationApplyComponent } from './quotation-apply.component';
import { QuotationApplyRoutingModule } from './quotation-apply-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    QuotationApplyComponent,
         
  ],
  imports: [
    CommonModule,
    QuotationApplyRoutingModule,
    SharedModule 
  ]
})
export class QuotationApplyModule { }
