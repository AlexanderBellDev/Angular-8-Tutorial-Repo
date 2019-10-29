import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentlistComponent} from "./departmentlist/departmentlist.component";
import {EmployeelistComponent} from "./employeelist/employeelist.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'departmentsnew', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentlistComponent},
  {path: 'employees', component: EmployeelistComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
