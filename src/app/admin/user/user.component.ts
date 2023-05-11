import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MatDialog, MatDialogActions, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';
import { Users, UserItem } from '../models/user';
import { Departments, Position } from '../models/organization';
import { OrganizationService } from '../../_services/organization.service';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent} from './useredit/useredit.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
  totalCount = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  usersDataSource = new MatTableDataSource<UserItem>();


  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.userList().subscribe(
      data => {
        this.usersDataSource.data = data;

        this.totalCount = data.length;
        this.usersDataSource.paginator = this.paginator;


      }
    );
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(UsercreateComponent, {
      hasBackdrop: false,
      height: '80%',
      width: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('關閉');

    });
  }

  openEdit(row: any): void {
    const dialogRef = this.dialog.open(UsereditComponent, {
      hasBackdrop: false,
      height: '80%',
      width: '60%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('close');
    })
  }
  openDel(row: any): void {
    const dialogRef = this.dialog.open(UserDel, {
      hasBackdrop: false,
      height: '400px',
      width: '400px',
      data: row
    });
  }

}


@Component({
  selector: 'user-del',
  templateUrl: './user-del.component.html'
})

export class UserDel {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public dialogRef: MatDialogRef<UserDel>, @Inject(MAT_DIALOG_DATA) private data: UserItem, private userService: UserService, private _sankBar: MatSnackBar) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  UserDel(): void {

    this.userService.deleteUser(this.data.ID).subscribe(
      data => {
        this._sankBar.open(`${this.data.name}刪除成功`, '結束', {
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
