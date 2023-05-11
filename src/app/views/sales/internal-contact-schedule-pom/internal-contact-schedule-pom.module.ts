import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalContactSchedulePomComponent } from './internal-contact-schedule-pom.component';
import { InternalContactSchedulePomRoutingModule } from './internal-contact-schedule-pom-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalContactSchedulePomEditComponent } from './internal-contact-schedule-pom-edit/internal-contact-schedule-pom-edit.component';

@NgModule({
  declarations: [
    InternalContactSchedulePomComponent,
    InternalContactSchedulePomEditComponent
  ],
  imports: [
    CommonModule,
    InternalContactSchedulePomRoutingModule,
    SharedModule
  ]
})
export class InternalContactSchedulePomModule { }
