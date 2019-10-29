import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-servicestutorial',
  templateUrl: './servicestutorial.component.html',
  styleUrls: ['./servicestutorial.component.css']
})
export class ServicestutorialComponent implements OnInit {
  public employees: Array<Employee>;
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data =>
      this.employees = data);
    console.log(this.employees);
  }

}
