import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { HomeComponent } from './home/home.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { AboutComponent } from './about/about.component';
import { AssignLeaderComponent } from './assign-leader/assign-leader.component';

import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';

import { ProgramsService } from './services/programs.service';
import { OutcomeService } from './services/outcome.service';
import { UserService } from './services/user.service';
import { PlanAssessmentService } from './services/plan-assessment.service';
import { AuthService } from './services/auth.service';
import { MethodService } from './services/method.service';
import { TablaCreatePlanComponent } from './tabla-create-plan/tabla-create-plan.component';
import { ChartFrontComponent } from './chart-front/chart-front.component';
import { ChartBackComponent } from './chart-back/chart-back.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    HomeComponent,
    CreatePlanComponent,
    AboutComponent,
    AssignLeaderComponent,
    TablaCreatePlanComponent,
    ChartFrontComponent,
    ChartBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    Ng2SmartTableModule,
    ChartsModule,

  ],
  providers: [ProgramsService,OutcomeService,PlanAssessmentService,UserService,AuthService,MethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
