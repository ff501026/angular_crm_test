import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Department, EditDepartment } from 'src/app/admin/models/organization';
import { OrganizationService } from 'src/app/_services/organization.service';

@Component({
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.scss']
})
export class EditdepartmentComponent  {


  constructor(public dialogRef: MatDialogRef<EditdepartmentComponent>, @Inject(MAT_DIALOG_DATA) private data: Department, private organizationService: OrganizationService) {
    console.log(this.data);
  }
  editDepartmentForm: FormGroup = new FormGroup({
    department: new FormControl(this.data.department, Validators.required),
    is_children: new FormControl(this.data.is_children),
    upper_department: new FormControl(this.data.upper_department),
   });


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.editDepartmentForm.value)
    const organizationItem: EditDepartment = this.editDepartmentForm.value;
    this.organizationService.editDepartment(this.data.ID, organizationItem).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
        window.location.reload();
      }
    )
  }

}
