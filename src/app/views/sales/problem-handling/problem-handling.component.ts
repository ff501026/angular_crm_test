import { ProblemHandlingEditDialogComponent } from './problem-handling-edit-dialog/problem-handling-edit-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProblemHandlingNewDialogComponent } from './problem-handling-new-dialog/problem-handling-new-dialog.component';
export interface contactListELement{
  
  summary:string;
  c_name:string;
  liaison_phone:string;
  creater:string;
  j_id:string;
}
const ELEMENT_DATA:contactListELement[] =[
  {summary:'2021/12/01',c_name:'吳小姐',liaison_phone:'EGK30003',
  creater:'未派工',j_id:'編輯'}
]
@Component({
  selector: 'app-problem-handling',
  templateUrl: './problem-handling.component.html',
  styleUrls: ['./problem-handling.component.scss']
})
export class ProblemHandlingComponent implements OnInit {
  displayedColumn:string[] = ['summary','c_name','liaison_phone','creater'
  ,'j_id'];
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
    this.dialog.open(ProblemHandlingEditDialogComponent);
  }
  doPost(): void {
    this.dialog.open(ProblemHandlingNewDialogComponent);
  }
}
