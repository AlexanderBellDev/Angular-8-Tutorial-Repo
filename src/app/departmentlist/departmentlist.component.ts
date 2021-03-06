import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {relativeFrom} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  activeId;
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'Mongo DB'},
    {id: 4, name: 'Ruby'},
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.activeId = parseInt(params.get('id'));
    })
  }

  onSelect(department) {
    // this.router.navigate(['/departments',department.id])
    this.router.navigate([department.id], {relativeTo: this.activatedRoute})
  }

  isSelected(department){
    return department.id === this.activeId;
  }
}
