//import { MY_DATE_FORMATS } from './views/features/project-manager/project-manager-edit/project-manager-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';

//import { HelloComponent } from './views/features/produce-sales-meeting/produce-add-appendix-dialog/hello.component';
//import { ProduceAddAppendixDialogModule } from './views/features/produce-sales-meeting/produce-add-appendix-dialog/produce-add-appendix-dialog.module';
import { InternalContactListComponent } from './views/sales/internal-contact-list/internal-contact-list.component';
import { InternalContactListModule } from './views/sales/internal-contact-list/internal-contact-list.module';
import { InternalContactListRoutingModule } from './views/sales/internal-contact-list/internal-contact-list-routing.module';
import { InternalContactListAddModule } from './views/sales/internal-contact-list/internal-contact-list-add/internal-contact-list-add.module';
import { InternalContactListAddRoutingModule } from './views/sales/internal-contact-list/internal-contact-list-add/internal-contact-list-add-routing.module';
import { InternalContactListEditModule } from './views/sales/internal-contact-list/internal-contact-list-edit/internal-contact-list-edit.module';
import { InternalContactListEditRoutingModule } from './views/sales/internal-contact-list/internal-contact-list-edit/internal-contact-list-edit-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

//chart
import { ChartsModule } from 'ng2-charts';
import { QuotationApplyComponent } from './views/sales/quotation-apply/quotation-apply.component';
import { QuotationApplyRoutingModule } from './views/sales/quotation-apply/quotation-apply-routing.module';
import { QuotationApplyModule } from './views/sales/quotation-apply/quotation-apply.module';
import { InternalContactListAuditCountersignerComponent } from './views/features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner.component';
import { InternalContactListAuditCountersignerRoutingModule } from './views/features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner-routing.module';
import { InternalContactListAuditCountersignerModule } from './views/features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner.module';
import { ProblemHandlingDealWithComponent } from './views/features/problem-handling-deal-with/problem-handling-deal-with.component';
import { ProblemHandlingDispatchWorkerComponent } from './views/features/problem-handling-dispatch-worker/problem-handling-dispatch-worker.component';
import { ProblemHandlingDispatchWorkerRoutingModule } from './views/features/problem-handling-dispatch-worker/problem-handling-dispatch-worker-routing.module';
import { ProblemHandlingDispatchWorkerModule } from './views/features/problem-handling-dispatch-worker/problem-handling-dispatch-worker.module';
import { ProblemHandlingDealWithRoutingModule } from './views/features/problem-handling-deal-with/problem-handling-deal-with-routing.module';
import { ProblemHandlingDealWithModule } from './views/features/problem-handling-deal-with/problem-handling-deal-with.module';

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
  MatRadioModule,
  MatTabsModule,
  MatExpansionModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatRippleModule,
  //HttpClientInMemoryWebApiModule


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    //ProblemHandlingDealWithComponent,
    //ProblemHandlingDispatchWorkerComponent,
    //InternalContactListAuditCountersignerComponent,
    //QuotationApplyComponent,
    //PmReturnComponent,
    //TaskReturnComponent,
    //FixtureScheduleQueryComponent,
    //PersonDailyWorkModifyComponent,
    //VirusCodeListComponent,
    //InternalContactListComponent,
    //MyDailyWorksComponent,
    //ProjectDateListComponent,
    //PersonTodayListComponent,
    //PersonDailyWorkModifyComponent,
    //ProjectRecordBookComponent,
    //ProjectTemplateComponent,
    //ProjectTaskTemplateComponent,
    //ProjectAuditFormComponent,
    //ProjectPlanListComponent,
    //ProduceSalesMeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaModule,
    //CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    //ProduceAddAppendixDialogModule,
    // InternalContactListModule,
    // InternalContactListRoutingModule,
    // InternalContactListAddModule,
    // InternalContactListAddRoutingModule,
    // InternalContactListEditModule,
    // InternalContactListEditRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ChartsModule,
    QuotationApplyRoutingModule,
    QuotationApplyModule,
    InternalContactListAuditCountersignerRoutingModule,
    InternalContactListAuditCountersignerModule,
    //ProblemHandlingDispatchWorkerRoutingModule,
    //ProblemHandlingDispatchWorkerModule,
    //ProblemHandlingDealWithRoutingModule,
    //ProblemHandlingDealWithModule,
    //ProblemHandlingEditDialogRoutingModule,
    //ProblemHandlingEditDialogModule,
    //InternalContactListAuditCountersignerEditRoutingModule,
    //InternalContactListAuditCountersignerEditModule//圖表套件
    // ProjectTemplateEditModule,
    // ProjectTemplateEditRoutingsModule,
    //AngularFireStorageModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }