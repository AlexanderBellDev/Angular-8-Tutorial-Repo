import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }

  onClick(event: MouseEvent) {
    console.log(event);
    this.greeting = 'hello';
    console.log('Welcome to codeevolution');
  }
}
