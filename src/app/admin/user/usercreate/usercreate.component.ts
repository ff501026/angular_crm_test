import { Component, Inject, Input, OnInit, OnChanges, ViewChild, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef} from '@angular/material/dialog';
import { UserService } from '../../../_services/user.service';
import { Users } from '../../models/user';
import {  Departments, Positions } from '../../models/organization';
import { OrganizationService } from '../../../_services/organization.service';


@Component({
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {

  @Input()
  department?: string;

  taskTitle: string = '';

  taskList = new FormControl();

  optionList: string[] = ['請購單', '採購單', '收料單', '請假單'];

  createUserForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    user_id: new FormControl(''),
    department: new FormControl(''),
    proxy_department: new FormControl(''),
    position: new FormControl(''),
    proxy_position: new FormControl(''),
    review_level: new FormControl(null),
    proxy_review_level: new FormControl(null),
    task_list: new FormControl()

   });

  constructor(public dialogRef: MatDialogRef<UsercreateComponent>, private userService: UserService, private organizationService: OrganizationService) { }

  @Input() departments?: string;

  departmentDatas: Departments[] = [];
  proxyDepartmentDatas: Departments[] = [];
  positionDatas: Positions[] = [];
  proxyPositionDatas: Positions[] = [];
  filteredDpOptions: Observable<Departments[]> | undefined;
  filteredPsOptions: Observable<Positions[]> | undefined;
  filteredDepOptions: Observable<Departments[]> | undefined;
  filteredDpsOptions: Observable<Positions[]> | undefined;

  ngOnInit(): void {
    this.organizationService.fetchDepartment().subscribe(
      data => {
        this.departmentDatas = data;
        this.proxyDepartmentDatas = data;

      }
    );


    this.organizationService.fetchPosition().subscribe(
      data => {
        this.positionDatas = data;
        this.proxyPositionDatas = data;
      }
    );

    this.filteredDpOptions = this.createUserForm.valueChanges
      .pipe(
         startWith(''),
        map(value => typeof value === 'string' ? value : value.department),

        map(department => department ? this._filterDepartment(department) : this.departmentDatas.slice()),

    );

    this.filteredDepOptions = this.createUserForm.valueChanges
    .pipe(
       startWith(''),
      map(value => typeof value === 'string' ? value : value.proxy_department),

      map(proxy_department => proxy_department ? this._filterProxyDepartment(proxy_department) : this.proxyDepartmentDatas.slice()),

  );
    this.filteredPsOptions = this.createUserForm.valueChanges
    .pipe(
       startWith(''),
      map(value => typeof value === 'string' ? value : value.position),

      map(position => position ? this._filterPosition(position) : this.positionDatas.slice()),

    );

    this.filteredDpsOptions = this.createUserForm.valueChanges
    .pipe(
       startWith(''),
      map(value => typeof value === 'string' ? value : value.proxy_position),

      map(proxy_position => proxy_position ? this._filterProxyPosition(proxy_position) : this.proxyPositionDatas.slice()),

  );
  }

  checkValue() {
    console.log(this.taskList.valueChanges);
}

  // fetchPosition(): void {
  //   const department = this.createUserForm.get('department')?.value;
  //   console.log(department)
  //   if (department !== undefined) {
  //     this.organizationService.fetchPosition(department).subscribe(
  //       data => {
  //         this.positionDatas = data;
  //       }
  //     );
  //   } else {

  //   }


  // }
  displayDpFn(departments: Departments): string {

    return departments && departments.department ? departments.department : '';
  }
  displayPsFn(positions: Positions): string {

    return positions && positions.position ? positions.position : '';
  }

  displayPdpFn(departments: Departments): string {

    return departments && departments.department ? departments.department : '';
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    this.createUserForm.get('role')?.setValue('user');
    const organization = this.createUserForm.get('position')?.value;
    const departments = this.createUserForm.get('department')?.value;
    this.createUserForm.get('task_list')?.setValue(this.taskList.value)
    let { department } = departments;
    let { position, review_level } = organization;
    this.createUserForm.get('review_level')?.setValue(review_level);
    this.createUserForm.get('position')?.setValue(position);
    this.createUserForm.get('department')?.setValue(department);
    const proxyPosition = this.createUserForm.get('proxy_position')?.value;
    const proxyDepartment = this.createUserForm.get('proxy_department')?.value;
    if (proxyPosition.position.length !== 0) {
      let { position, review_level } = proxyPosition;
      this.createUserForm.get('proxy_position')?.setValue(position);
      this.createUserForm.get('proxy_review_level')?.setValue(review_level);
    }
    if (proxyDepartment.department.length !== 0) {
      let { department} = proxyDepartment;
      this.createUserForm.get('proxy_department')?.setValue(department);
    }
    const userItem: Users = this.createUserForm.value;
    this.userService.createUser(userItem).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
        window.location.reload();
      }
    );
  }

}
