import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { OrganizationService } from '../../../_services/organization.service';
import {  CreateDepartment } from '../../models/organization';

@Component({
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.scss']
})
export class CreatedepartmentComponent  {
  createDepartmentForm: FormGroup = new FormGroup({
    department: new FormControl('', Validators.required),
    is_children: new FormControl('', Validators.required),
    upper_department: new FormControl('')
   });
  constructor(public dialogRef: MatDialogRef<CreatedepartmentComponent>, private organizationService: OrganizationService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    const organizationItem: CreateDepartment = this.createDepartmentForm.value;
    this.organizationService.departmentCreate(organizationItem).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
        window.location.reload();
      }
    )
  }
}
