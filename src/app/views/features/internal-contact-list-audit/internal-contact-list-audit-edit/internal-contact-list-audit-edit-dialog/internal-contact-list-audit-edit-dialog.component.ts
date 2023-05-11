import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

interface department {
  value: string;
  viewValue: string;
}

interface employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-internal-contact-list-audit-edit-dialog',
  templateUrl: './internal-contact-list-audit-edit-dialog.component.html',
  styleUrls: ['./internal-contact-list-audit-edit-dialog.component.scss']
})
export class InternalContactListAuditEditDialogComponent implements OnInit {
  selectedEmployee:string[];
  selectedDepartment:string[];
  selectDate:Date[];
  selectedTable:string;

  departments: department[] = [
    {value: 'steak-0', viewValue: '機控'},
    {value: 'pizza-1', viewValue: '軟體'},
    {value: 'tacos-2', viewValue: '電控'},
    {value: 'tacos-2', viewValue: '製造'},
    {value: 'tacos-2', viewValue: '其他'},
  ];

  employees: employee[] = [
    {value: 'steak-0', viewValue: '曾德玉'},
    {value: 'steak-0', viewValue: '糕執政'},
  ];

  date = new FormControl(new Date());

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  constructor() { }

  ngOnInit(): void {
  }

  addSelectValues():void{

  }

}
