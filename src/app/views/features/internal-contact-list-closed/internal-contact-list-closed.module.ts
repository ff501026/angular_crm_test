import { InternalContactListClosedRoutingModule } from './internal-contact-list-closed-routing.module';
import { InternalContactListClosedComponent } from './internal-contact-list-closed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactListClosedEditComponent } from './internal-contact-list-closed-edit/internal-contact-list-closed-edit.component';




@NgModule({
  declarations: [
    InternalContactListClosedComponent,
    InternalContactListClosedEditComponent,
  ],
  imports: [
    CommonModule,
    InternalContactListClosedRoutingModule,
    SharedModule
  ]
})
export class InternalContactListClosedModule { }
