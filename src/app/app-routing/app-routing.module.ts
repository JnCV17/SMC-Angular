import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreatePlanComponent } from '../create-plan/create-plan.component';
import { AboutComponent } from '../about/about.component';
import { AssignLeaderComponent } from '../assign-leader/assign-leader.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path:'home',component:HomeComponent},
      { path:'create',component:CreatePlanComponent},
      { path:'about',component:AboutComponent},
      { path:'assign',component:AssignLeaderComponent},
      { path:'admin', component: AdminComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }


