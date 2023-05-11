import { ProblemHandlingDealWithModule } from './../features/problem-handling-deal-with/problem-handling-deal-with.module';
import { InternalContactListAuditCountersignerEditModule } from './../features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner-edit/internal-contact-list-audit-countersigner-edit.module';
import { InternalContactListAuditCountersignerRoutingModule } from './../features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner-routing.module';

//import { ManufactureOderOpenModule } from './../features/project-manager/manufacture-order-open/manufacture-oder-open.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { ContainerComponent } from './container.component';

const routes: Routes = [
  //main後面若為空直接導向dashboard
  { path: '', redirectTo: 'dashboard' },
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { breadcrumb: '首頁' }
      },
      {
        path: '',
        children: [
          {
            path:'sales',
            children:[
              {
                path: 'internal-contact-list',
                loadChildren: () => import('../sales/internal-contact-list/internal-contact-list.module').then(m => m.InternalContactListModule),
              },
              {
                path: 'internal-contact-list-add',
                loadChildren: () => import('../sales/internal-contact-list/internal-contact-list-add/internal-contact-list-add.module').then(m => m.InternalContactListAddModule),
              },
              {
                path: 'internal-contact-list-edit',
                loadChildren: () => import('../sales/internal-contact-list/internal-contact-list-edit/internal-contact-list-edit.module').then(m => m.InternalContactListEditModule),
              },
              {
                path: 'internal-contact-schedule',
                loadChildren: () => import('../sales/internal-contact-schedule/internal-contact-schedule.module').then(m => m.InternalContactScheduleModule),
              },
              {
                path: 'internal-contact-schedule-query',
                loadChildren: () => import('../sales/internal-contact-schedule-query/internal-contact-schedule-query.module').then(m => m.InternalContactScheduleQueryModule),
              },
              {
                path: 'internal-contact-schedule-pom',
                loadChildren: () => import('../sales/internal-contact-schedule-pom/internal-contact-schedule-pom.module').then(m => m.InternalContactSchedulePomModule),
              },
              {
                path: 'internal-contact-schedule-odm',
                loadChildren: () => import('../sales/internal-contact-schedule-odm/internal-contact-schedule-odm.module').then(m => m.InternalContactScheduleOdmModule),
              }
            ]
          },
          {
            path: 'quotation-apply',
            loadChildren: () => import('../sales/quotation-apply/quotation-apply.module').then(m => m.QuotationApplyModule),
          },
          {
            path: 'sales-service-work-schedule',
            loadChildren: () => import('../sales/sales-service-work-schedule/sales-service-work-schedule.module').then(m => m.SalesServiceWorkScheduleModule),
          },
          {
            path: 'cust-service-work-place',
            loadChildren: () => import('../sales/cust-service-work-place/cust-service-work-place.module').then(m => m.CustServiceWorkPlaceModule),
          },
          {
            path: 'cust-service-work-place-edit',
            loadChildren: () => import('../sales/cust-service-work-place/cust-service-work-place-edit/cust-service-work-place-edit.module').then(m => m.CustServiceWorkPlaceEditModule),
          },
          {
            path: 'cust-service-work-place-new',
            loadChildren: () => import('../sales/cust-service-work-place/cust-service-work-place-new/cust-service-work-place-new.module').then(m => m.CustServiceWorkPlaceNewModule),
          },

          {
            path: 'problem-handling',
            loadChildren: () => import('../sales/problem-handling/problem-handling.module').then(m => m.ProblemHandlingModule),
          }
        ]
      },
      {
        path: 'internal-contact-list-audit',
        loadChildren: () => import('../features/internal-contact-list-audit/internal-contact-list-audit.module').then(m => m.InternalContactListAuditModule),
        data: { breadcrumb: '待審核治具需求單' }
      },
      {
        path: 'internal-contact-list-audit-edit',
        loadChildren: () => import('../features/internal-contact-list-audit/internal-contact-list-audit-edit/internal-contact-list-audit-edit.module').then(m => m.InternalContactListAuditEditModule),
        data: { breadcrumb: '待審核治具需求單編輯' }
      },
      {
        path: 'internal-contact-list-closed',
        loadChildren: () => import('../features/internal-contact-list-closed/internal-contact-list-closed.module').then(m => m.InternalContactListClosedModule),
        data: { breadcrumb: '待結案治具需求單' }
      },
      {
        path: 'internal-contact-list-closed-edit',
        loadChildren: () => import('../features/internal-contact-list-closed/internal-contact-list-closed-edit/internal-contact-list-closed-edit.module').then(m => m.InternalContactListClosedEditModule),
        data: { breadcrumb: '待結案治具需求單編輯' }
      },
      {
        path: 'internal-contact-list-audit-countersigner',
        loadChildren: () => import('../features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner.module').then(m => m.InternalContactListAuditCountersignerModule),
        data: { breadcrumb: '待結案治具需求單會簽人員' }
      },
      {
        path: 'internal-contact-list-audit-countersigner-edit',
        loadChildren: () => import('../features/internal-contact-list-audit-countersigner/internal-contact-list-audit-countersigner-edit/internal-contact-list-audit-countersigner-edit.module').then(m => m.InternalContactListAuditCountersignerEditModule),
        data: { breadcrumb: '待結案治具需求單會簽人員編輯' }
      },
      {
        path: 'problem-handling-dispatch-worker',
        loadChildren: () => import('../features/problem-handling-dispatch-worker/problem-handling-dispatch-worker.module').then(m => m.ProblemHandlingDispatchWorkerModule),
        data: { breadcrumb: '待派工故障申報單' }
      },
      {
        path: 'problem-handling-deal-with',
        loadChildren: () => import('../features/problem-handling-deal-with/problem-handling-deal-with.module').then(m => m.ProblemHandlingDealWithModule),
        data: { breadcrumb: '待處理故障申報單' }
      }
      // {
      //   path: 'sales',
      //   children: [
      //     {
      //       path: 'internal-contact-list',
      //       loadChildren: () => import('../sales/internal-contact-list/internal-contact-list.module').then(m => m.InternalContactListModule),
      //       data: { breadcrumb: '專案管理作業' }
      //     },
      //     {
      //       path: 'internal-contact-list-add',
      //       loadChildren: () => import('../sales/internal-contact-list/internal-contact-list-add/internal-contact-list-add.module').then(m => m.InternalContactListAddModule),
      //     },
      //     {
      //       path: 'internal-contact-list-edit',
      //       loadChildren: () => import('../sales/internal-contact-list/internal-contact-list-edit/internal-contact-list-edit.module').then(m => m.InternalContactListEditModule),
      //     },
      //     {
      //       path: 'internal-contact-schedule',
      //       loadChildren: () => import('../sales/internal-contact-schedule/internal-contact-schedule.module').then(m => m.InternalContactScheduleModule),
      //     },
      //     {
      //       path: 'internal-contact-schedule-query',
      //       loadChildren: () => import('../sales/internal-contact-schedule-query/internal-contact-schedule-query.module').then(m => m.InternalContactScheduleQueryModule),
      //     },
      //     {
      //       path: 'internal-contact-schedule-pom',
      //       loadChildren: () => import('../sales/internal-contact-schedule-pom/internal-contact-schedule-pom.module').then(m => m.InternalContactSchedulePomModule),
      //     },
      //     {
      //       path: 'internal-contact-schedule-odm',
      //       loadChildren: () => import('../sales/internal-contact-schedule-odm/internal-contact-schedule-odm.module').then(m => m.InternalContactScheduleOdmModule),
      //     },
      //     {
      //       path: 'quotation-apply',
      //       loadChildren: () => import('../sales/quotation-apply/quotation-apply.module').then(m => m.QuotationApplyModule),
      //     }
      //   ]
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
