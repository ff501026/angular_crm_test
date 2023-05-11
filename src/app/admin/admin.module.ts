import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserComponent, UserDel } from './user/user.component';

import { UsercreateComponent } from './user/usercreate/usercreate.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { DepartmentComponent } from './department/department.component';
import { PositionComponent } from './position/position.component';
import { CreatedepartmentComponent } from './department/createdepartment/createdepartment.component';
import { EditdepartmentComponent } from './department/editdepartment/editdepartment.component';
import { DeldepartmentComponent } from './department/deldepartment/deldepartment.component';
import { CreatepositionComponent } from './position/createposition/createposition.component';
import { EditpositionComponent } from './position/editposition/editposition.component';
import { DelpositionComponent } from './position/delposition/delposition.component';


const MaModule = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatGridListModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule
];


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations:
    [AdminComponent, UserComponent,
    UserDel, UsercreateComponent, UsereditComponent,
    DepartmentComponent, PositionComponent,
    CreatedepartmentComponent, EditdepartmentComponent,
    DeldepartmentComponent, CreatepositionComponent,
    EditpositionComponent, DelpositionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    /*BrowserModule,
    BrowserAnimationsModule,
    FormsModule,*/
    ReactiveFormsModule,
    HttpClientModule,
    MaModule
  ]
})
export class AdminModule { }