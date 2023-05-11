import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationApplyComponent } from './quotation-apply.component';

const routes: Routes = [{ path: '', component: QuotationApplyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationApplyRoutingModule { }
