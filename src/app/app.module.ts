import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import {FormsModule} from '@angular/forms';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicestutorialComponent } from './servicestutorial/servicestutorial.component';
import {EmployeeService} from "./service/employee.service";
import {HttpClientModule} from "@angular/common/http";
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentoverviewComponent } from './departmentoverview/departmentoverview.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    EventbindingComponent,
    TemplatereferenceComponent,
    TwowaybindingComponent,
    StructuraldirectivesComponent,
    ComponentinteractionComponent,
    PipesComponent,
    ServicestutorialComponent,
    DepartmentlistComponent,
    EmployeelistComponent,
    PageNotFoundComponent,
    HomeComponent,
    DepartmentDetailComponent,
    DepartmentoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
