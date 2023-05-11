import { Component, OnInit } from '@angular/core';


export interface contactListELement{
  
  summary:string;
  c_name:string;
  liaison_phone:string;
  creater:string;
  j_id:string;
}
const ELEMENT_DATA:contactListELement[] =[
  {summary:'高雄',c_name:'好大的工廠',liaison_phone:'xD24',
  creater:'',j_id:'編輯'}
]
@Component({
  selector: 'app-cust-service-work-place',
  templateUrl: './cust-service-work-place.component.html',
  styleUrls: ['./cust-service-work-place.component.scss']
})
export class CustServiceWorkPlaceComponent implements OnInit {

  displayedColumn:string[] = ['summary','c_name','liaison_phone','creater','j_id'];
  datasSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
      //this.selectedItem = item;
      // const dialogRef = this.dialog.open(this.editDialog);
      window.location.assign('main/internal-contact-list-add');
    }

  editItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    window.location.assign('main/cust-service-work-place-edit');
  }
  newItem() {
    //this.selectedItem = item;
    // const dialogRef = this.dialog.open(this.editDialog);
    window.location.assign('main/cust-service-work-place-new');
  }
}
