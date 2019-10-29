import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  date = new Date();
  public name = 'Alex';
  public message = 'Welcome to alex site';
  public person = {
    firstName: 'Alexander',
    lastName: 'Bell'
  };
  constructor() { }

  ngOnInit() {
  }

}
