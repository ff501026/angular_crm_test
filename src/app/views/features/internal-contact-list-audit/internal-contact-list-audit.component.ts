import { Component, OnInit } from '@angular/core';

export interface contactListELement{
  
  summary:string;
  c_name:string;
  liaison_phone:string;
  creater:string;
  date:string;
  j_id:string;
}
const ELEMENT_DATA:contactListELement[] =[
  {summary:'20211102',c_name:'讚到爆掉的機器',liaison_phone:'總經理室',
  creater:'吳小姐',date:'2021/11/25',j_id:'編輯'}
]
@Component({
  selector: 'app-internal-contact-list-audit',
  templateUrl: './internal-contact-list-audit.component.html',
  styleUrls: ['./internal-contact-list-audit.component.scss']
})

export class InternalContactListAuditComponent implements OnInit {
  displayedColumn:string[] = ['summary','c_name','liaison_phone','creater'
  ,'date','j_id'];
  datasSource = ELEMENT_DATA;
  constructor() { }

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
    window.location.assign('main/internal-contact-list-audit-edit');
  }
  
}
