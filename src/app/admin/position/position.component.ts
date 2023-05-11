import { Component, OnInit, ViewChild } from '@angular/core';
import { Positions } from '../models/organization';
import { OrganizationService } from '../../_services/organization.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreatepositionComponent } from './createposition/createposition.component';
import { EditpositionComponent } from './editposition/editposition.component';
import { DelpositionComponent } from './delposition/delposition.component';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  totalCount = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  organizationDataSource = new MatTableDataSource<Positions>();

  constructor(private organizationService: OrganizationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.organizationService.positionList().subscribe(
      data => {
        this.organizationDataSource.data = data;
        this.totalCount = data.length;
        this.organizationDataSource.paginator = this.paginator;
      }
    );
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(CreatepositionComponent, {
      hasBackdrop: false,
      height: '600px',
      width: '600px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('關閉');

    });
  }

  openEdit(row: any): void {
    const dialogRef = this.dialog.open(EditpositionComponent, {
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
    const dialogRef = this.dialog.open(DelpositionComponent, {
      hasBackdrop: false,
      height: '400px',
      width: '400px',
      data: row
    });
  }

}
