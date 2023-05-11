import { Component, OnInit } from '@angular/core';


export interface contactListELement{
  q_id:string;
  to:string;
  attn:string;
  date:string;
  creater:string;
  create_time:string;
  status:string;
}
const ELEMENT_DATA:contactListELement[]=[
  {q_id:'20211027001',to:'ajkld',attn:'xy',date:'2021/10/28',creater:'吳先生',create_time:'2021/10/27',status:'建檔中'}
]
@Component({
  selector: 'app-quotation-apply',
  templateUrl: './quotation-apply.component.html',
  styleUrls: ['./quotation-apply.component.scss']
})
export class QuotationApplyComponent implements OnInit {
  displayedColumn:string[] = ['q_id','to','attn','date','creater'
  ,'create_time','status','edit'];
  datasSource = ELEMENT_DATA;
  constructor(){ }

  ngOnInit(): void {
  }

  editItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    window.location.assign('main/sales/internal-contact-list-edit');
  }
}
