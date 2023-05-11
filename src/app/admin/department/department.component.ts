import { Component, OnInit, ViewChild } from '@angular/core';
import { Departments } from '../models/organization';
import { OrganizationService } from '../../_services/organization.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {CreatedepartmentComponent } from './createdepartment/createdepartment.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { DeldepartmentComponent } from './deldepartment/deldepartment.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  totalCount = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  organizationDataSource = new MatTableDataSource<Departments>();

  constructor(private organizationService: OrganizationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.organizationService.departmentList().subscribe(
      data => {
        this.organizationDataSource.data = data;
        this.totalCount = data.length;
        this.organizationDataSource.paginator = this.paginator;
      }
    );
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(CreatedepartmentComponent, {
      hasBackdrop: false,
      height: '500px',
      width: '800px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('關閉');

    });
  }

  openEdit(row: any): void {
    const dialogRef = this.dialog.open(EditdepartmentComponent, {
      hasBackdrop: false,
      height: '600px',
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('close');
    })
  }
  openDel(row: any): void {
    const dialogRef = this.dialog.open(DeldepartmentComponent, {
      hasBackdrop: false,
      height: '400px',
      width: '400px',
      data: row
    });
  }

}
