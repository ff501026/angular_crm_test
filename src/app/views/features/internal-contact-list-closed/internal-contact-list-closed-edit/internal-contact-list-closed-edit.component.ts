import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
export interface recordData {
  record_date:string;
  member:string;
  department:string;
  record_content:string;
}
interface Options {
  value: string;
  viewValue: string;
}
const recordData:recordData[] = [
  {
    record_date: '2020/05/20 10:10:10',
    member: '陳先生',
    department: '軟體研發部-Vision',
    record_content: '單據確認完工',
  },
  {
    record_date: '2020/05/20 10:10:10',
    member: '陳先生',
    department: '營運業務部',
    record_content: '儲存工作內容',
  },
  {
    record_date: '2020/05/20 10:10:10',
    member: '陳先生',
    department: '營運業務部',
    record_content: '儲存工作內容',
  },
  {
    record_date: '2020/05/20 10:10:10',
    member: '陳先生',
    department: '總經理室',
    record_content: '儲存工作內容',
  },
  {
    record_date: '2020/05/20 10:10:10',
    member: '陳先生',
    department: '總經理室',
    record_content: '儲存工作內容',
  },
  {
    record_date: '2020/05/20 10:10:10',
    member: '陳先生',
    department: '總經理室',
    record_content: '儲存工作內容',
  },
];
@Component({
  selector: 'app-internal-contact-list-closed-edit',
  templateUrl: './internal-contact-list-closed-edit.component.html',
  styleUrls: ['./internal-contact-list-closed-edit.component.scss']
})
export class InternalContactListClosedEditComponent implements OnInit {
 
  displayedColumn: string[] = ['record_date', 'member','department', 'record_content'];
  datasSource = recordData;

  range: FormGroup;
  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.range = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }

  ngOnInit(): void {
  }
  
  options: Options[] = [
    {value: '業務主管-0', viewValue: '業務主管'},
    {value: '業務聯絡人-1', viewValue: '業務聯絡人'},
    {value: '設備務主管-3', viewValue: '設備務主管'},
    {value: '設備聯絡人-4', viewValue: '設備聯絡人'},
    {value: '技術主管-5', viewValue: '技術主管'},
    {value: '技術聯絡人-6', viewValue: '技術聯絡人'},
    {value: '其他-7', viewValue: '其他'}
  ];
  selectedOp = this.options[0].value;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  exitItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    window.location.assign('main/internal-contact-list-closed');
  }
  
  
}
