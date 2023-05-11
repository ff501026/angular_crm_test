import { ProblemHandlingDispatchWorkerRoutingModule } from './problem-handling-dispatch-worker-routing.module';
import { ProblemHandlingDispatchWorkerComponent } from './problem-handling-dispatch-worker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProblemHandlingDispatchWorkerEditDialogComponent } from './problem-handling-dispatch-worker-edit-dialog/problem-handling-dispatch-worker-edit-dialog.component';



@NgModule({
  declarations: [
    ProblemHandlingDispatchWorkerComponent,
    ProblemHandlingDispatchWorkerEditDialogComponent
  ],
  imports: [
    CommonModule,
    ProblemHandlingDispatchWorkerRoutingModule,
    SharedModule
  ]
})
export class ProblemHandlingDispatchWorkerModule { }
