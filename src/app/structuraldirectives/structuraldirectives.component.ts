import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
  visible = false;
  color = 'rrr';

  colors = ['red', 'yellow', 'blue', 'green'];
  constructor() { }

  ngOnInit() {
  }

}
