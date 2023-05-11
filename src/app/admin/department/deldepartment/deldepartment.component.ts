import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Department } from '../../models/organization';
import { OrganizationService} from '../../../_services/organization.service';

@Component({
  templateUrl: './deldepartment.component.html',
  styleUrls: ['./deldepartment.component.scss']
})
export class DeldepartmentComponent  {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public dialogRef: MatDialogRef<DeldepartmentComponent>, @Inject(MAT_DIALOG_DATA) private data: Department, private organizationService: OrganizationService, private _sankBar: MatSnackBar) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  DepartmentDel(): void {

    this.organizationService.deleteDepartment(this.data.ID).subscribe(
      data => {
        this._sankBar.open(`${this.data.department}刪除成功`, '結束', {
          duration: 500,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.dialogRef.close();
        window.location.reload();
      }
    )
  }

}
