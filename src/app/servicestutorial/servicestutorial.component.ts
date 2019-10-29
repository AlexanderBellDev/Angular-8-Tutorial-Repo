import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../employee";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-servicestutorial',
  templateUrl: './servicestutorial.component.html',
  styleUrls: ['./servicestutorial.component.css']
})
export class ServicestutorialComponent implements OnInit {
  public employees: Array<Employee>;
  public errorMsg: HttpErrorResponse;
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employeeService.getEmployees().subscribe(data => {
    //   this.employees = data},
    //   error => {this.errorMessage = error
    // }
    //   );

    return this.employeeService.getEmployees().subscribe(success => {
      console.log(success);
    }, error => { // second parameter is to listen for error
      this.errorMsg = error;
    });
  }

}
