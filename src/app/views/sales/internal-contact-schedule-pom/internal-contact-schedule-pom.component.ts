import { InternalContactSchedulePomEditComponent } from './internal-contact-schedule-pom-edit/internal-contact-schedule-pom-edit.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


export interface contactListELement{
  j_id:string;
  summary:string;
  c_name:string;
  action_edit:string;
}
const ELEMENT_DATA:contactListELement[] =[
  {j_id:'20210824',summary:'TSMC DS3010-T',c_name:'楠梓',action_edit:''}
]
@Component({
  selector: 'app-internal-contact-schedule-pom',
  templateUrl: './internal-contact-schedule-pom.component.html',
  styleUrls: ['./internal-contact-schedule-pom.component.scss']
})
export class InternalContactSchedulePomComponent implements OnInit {
  displayedColumn:string[] = ['j_id','summary','c_name','action_edit'];
  datasSource = ELEMENT_DATA;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  editItem():void{
    this.dialog.open(InternalContactSchedulePomEditComponent)
  }


}
