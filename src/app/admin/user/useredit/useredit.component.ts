import { Component, Inject, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MatDialog, MatDialogActions, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../../_services/user.service';
import { Users, UserItem } from '../../models/user';
import { Departments, Positions } from '../../models/organization';
import { OrganizationService } from '../../../_services/organization.service';

@Component({
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  @Input() department?: string;

  departmentDatas: Departments[] = [];
  proxyDepartmentDatas: Departments[] = [];
  positionDatas: Positions[] = [];
  proxyPositionDatas: Positions[] = [];
  filteredDpOptions: Observable<Departments[]> | undefined;
  filteredDepOptions: Observable<Departments[]> | undefined;
  filteredPsOptions: Observable<Positions[]> | undefined;
  filteredDpsOptions: Observable<Positions[]> | undefined;
  constructor(public dialogRef: MatDialogRef<UsereditComponent>, @Inject(MAT_DIALOG_DATA) private data: UserItem,
    private userService: UserService, private organizationService: OrganizationService) { }
  editUserForm: FormGroup = new FormGroup({
    name: new FormControl(this.data.name, Validators.required),
    role: new FormControl(this.data.role, Validators.required),
    user_id: new FormControl(this.data.user_id),
    position: new FormControl({ position:this.data.position }),
    department: new FormControl({department: this.data.department }),
    review_level: new FormControl(this.data.review_level),
    proxy_department: new FormControl({department: this.data.proxy_department }),
    proxy_position: new FormControl({position: this.data.proxy_position }),
    proxy_reviewlevel: new FormControl(this.data.proxy_reviewlevel)
  });

  ngOnInit(): void {
    this.organizationService.fetchDepartment().subscribe(
      data => {
        this.departmentDatas = data;
        this.proxyDepartmentDatas = data;
        console.log(this.departmentDatas);
      }
    );

    this.organizationService.fetchPosition().subscribe(
      data => {
        this.positionDatas = data;
        this.proxyPositionDatas = data;
        console.log(this.positionDatas);
      }
    );


    this.filteredDpOptions = this.editUserForm.valueChanges
      .pipe(
         startWith(''),
        map(value => typeof value === 'string' ? value : value.department),

        map(department => department ? this._filterDepartment(department) : this.departmentDatas.slice()),

    );
    this.filteredDepOptions = this.editUserForm.valueChanges
      .pipe(
         startWith(''),
        map(value => typeof value === 'string' ? value : value.proxy_department),

        map(proxy_department => proxy_department ? this._filterProxyDepartment(proxy_department) : this.proxyDepartmentDatas.slice()),

    );

    this.filteredPsOptions = this.editUserForm.valueChanges
    .pipe(
       startWith(''),
      map(value => typeof value === 'string' ? value : value.position),

      map(position => position ? this._filterPosition(position) : this.positionDatas.slice()),

  );
    this.filteredDpsOptions = this.editUserForm.valueChanges
    .pipe(
       startWith(''),
      map(value => typeof value === 'string' ? value : value.proxy_position),

      map(proxy_position => proxy_position ? this._filterProxyPosition(proxy_position) : this.proxyPositionDatas.slice()),

  );

  }
  displayDpFn(departments: Departments): string {

    return departments && departments.department ? departments.department : '';
  }
  displayPdpFn(departments: Departments): string {

    return departments && departments.department ? departments.department : '';
  }
  displayPsFn(positions: Positions): string {

    return positions && positions.position ? positions.position : '';
  }
  displayDpsFn(positions: Positions ): string {

    return positions && positions.position ? positions.position : '';
  }

  private _filterDepartment(department: string): Departments[] {
    const filterValue = department.toString().toLowerCase();

    return this.departmentDatas.filter(departmentData => departmentData.department.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterProxyDepartment(department: string): Departments[] {
    const filterValue = department.toString().toLowerCase();

    return this.proxyDepartmentDatas.filter(proxyDepartmentData => proxyDepartmentData.department.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterPosition(position: string): Positions[] {
    const filterValue = position.toString().toLowerCase();

    return this.positionDatas.filter(positionData => positionData.position.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterProxyPosition(position: string): Positions[] {
    const filterValue = position.toString().toLowerCase();

    return this.proxyPositionDatas.filter(proxyPositionData => proxyPositionData.position.toLowerCase().indexOf(filterValue) === 0);
  }

  // fetchPosition(): void {
  //   const department = this.editUserForm.get('department')?.value;

  //   if (department !== undefined) {
  //     this.organizationService.fetchPosition(department).subscribe(
  //       data => {
  //         this.positionDatas = data;
  //       }
  //     );
  //   } else {

  //   }


  // }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const  positions  = this.editUserForm.get('position')?.value;

    const departments = this.editUserForm.get('department')?.value;

    const proxyDepartment = this.editUserForm.get('proxy_department')?.value;

    const proxyPposition = this.editUserForm.get('proxy_position')?.value;

    if (positions.position !== this.data.position) {
      let { position, review_level } = positions;
    this.editUserForm.get('review_level')?.setValue(review_level);
      this.editUserForm.get('position')?.setValue(position);
    } else {

      this.editUserForm.get('position')?.setValue(this.data.position);
    }
    if (this.data.proxy_position !== proxyPposition.position) {
      let { position, review_level } = proxyPposition;
      this.editUserForm.get('proxy_position')?.setValue(position);
      this.editUserForm.get('proxy_reviewlevel')?.setValue(review_level);
    } else {

      this.editUserForm.get('proxy_position')?.setValue(this.data.proxy_position);
    }
    if (this.data.department !== departments.department) {
      let { department } = departments;
      this.editUserForm.get('department')?.setValue(department);
    } else {
      this.editUserForm.get('department')?.setValue(this.data.department);
    }

    if (this.data.proxy_department !== proxyDepartment.department) {
      let { department } = proxyDepartment;
      this.editUserForm.get('proxy_department')?.setValue(department);
    } else {
      this.editUserForm.get('proxy_department')?.setValue(this.data.proxy_department);
    }

    const userItem: Users = this.editUserForm.value;
    this.userService.editUser(this.data.ID, userItem).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
        window.location.reload();
      }
    )
  }


}
