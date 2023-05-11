import { AdminRoutingModule } from './../admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule 
  ]
})
export class DepartmentModule { }
