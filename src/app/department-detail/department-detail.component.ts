import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public id: number;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = parseInt(params.get('id'));
  })
  }

  goPrevious() {
   if(this.id!= 1){
     this.id = this.id -1  ;
   }
    this.router.navigate(['departments',this.id])
  }

  goNext() {
    this.id = this.id +1  ;
    this.router.navigate(['departments',this.id])
  }

  goToDepartments() {
    let selectedId = this.id ? this.id : null;
  this.router.navigate(['departments',{id: selectedId}])
  }
}
