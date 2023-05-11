import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class SharedModule { }
