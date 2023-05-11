import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemHandlingComponent } from './problem-handling.component';
import { ProblemHandlingRoutingModule } from './problem-handling-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProblemHandlingNewDialogComponent } from './problem-handling-new-dialog/problem-handling-new-dialog.component';
import { ProblemHandlingEditDialogComponent } from './problem-handling-edit-dialog/problem-handling-edit-dialog.component';


@NgModule({
  declarations: [
    ProblemHandlingComponent,
    ProblemHandlingNewDialogComponent,
    ProblemHandlingEditDialogComponent,
  ],
  imports: [
    CommonModule,
    ProblemHandlingRoutingModule,
    SharedModule
  ]
})
export class ProblemHandlingModule { }
