import { Component, OnInit } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cust-service-work-place-new',
  templateUrl: './cust-service-work-place-new.component.html',
  styleUrls: ['./cust-service-work-place-new.component.scss']
})
export class CustServiceWorkPlaceNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ps=''
  selected1=''
  selected2=''
  selected3=''
  selected4=''
  selected5=''
  selected6=''
  checkbox1=false
  input1=''
  resetInput(){
    this.ps=''
    this.selected1=''
    this.selected2=''
    this.selected3=''
    this.input1=''
    this.selected4=''
    this.selected5=''
    this.selected6=''
    this.checkbox1=false
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
    window.location.assign('main/cust-service-work-place');
  }
}
