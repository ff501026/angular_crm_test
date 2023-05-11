import { ProblemHandlingDispatchWorkerEditDialogComponent } from './problem-handling-dispatch-worker-edit-dialog/problem-handling-dispatch-worker-edit-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface contactListELement{
  
  summary:string;
  c_name:string;
  liaison_phone:string;
  status:string;
  j_id:string;
}
const ELEMENT_DATA:contactListELement[] =[
  {summary:'2021/12/01',c_name:'吳小姐',liaison_phone:'C043251441',status:'未指派',j_id:'編輯'}
]
@Component({
  selector: 'app-problem-handling-dispatch-worker',
  templateUrl: './problem-handling-dispatch-worker.component.html',
  styleUrls: ['./problem-handling-dispatch-worker.component.scss']
})
export class ProblemHandlingDispatchWorkerComponent implements OnInit {
  displayedColumn:string[] = ['summary','c_name','liaison_phone','status','j_id'];
  datasSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    this.dialog.open(ProblemHandlingDispatchWorkerEditDialogComponent);
  }
}
