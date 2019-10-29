import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'Mongo DB'},
    {id: 4, name: 'Ruby'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(['/departments',department.id])
  }
}
