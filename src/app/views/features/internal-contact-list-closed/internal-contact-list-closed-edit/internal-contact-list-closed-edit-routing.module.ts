import { InternalContactListClosedEditComponent } from './internal-contact-list-closed-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: InternalContactListClosedEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalContactListClosedEditRoutingModule { }
