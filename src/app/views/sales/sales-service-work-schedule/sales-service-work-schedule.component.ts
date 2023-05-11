import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SalesServiceWorkScheduleDialogComponent } from './sales-service-work-schedule-dialog/sales-service-work-schedule-dialog.component';

export interface contactListELement{
  j_id:string;
  summary:string;
  c_name:string;
  liaison_phone:string;
  creater:string;
  date_for_respond:string;
  date_for_demand:string;
  c_id:string;
}
const ELEMENT_DATA:contactListELement[] =[
  {j_id:'0165 高連俊',summary:'',c_name:'',liaison_phone:'',
  creater:'',date_for_respond:'',date_for_demand:'',
  c_id:''}
]

@Component({
  selector: 'app-sales-service-work-schedule',
  templateUrl: './sales-service-work-schedule.component.html',
  styleUrls: ['./sales-service-work-schedule.component.scss']
})
export class SalesServiceWorkScheduleComponent implements OnInit {
  displayedColumn:string[] = ['j_id','summary','c_name','liaison_phone','creater'
  ,'date_for_respond','date_for_demand','c_id'];
  datasSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    window.location.assign('main/sales/internal-contact-list-add');
  }

  editItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    window.location.assign('main/sales/internal-contact-list-edit');
  }
  doPost(): void {
    this.dialog.open(SalesServiceWorkScheduleDialogComponent);
  }
}
