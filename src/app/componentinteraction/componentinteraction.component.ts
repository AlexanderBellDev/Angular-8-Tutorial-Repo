import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-componentinteraction',
  templateUrl: './componentinteraction.component.html',
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey codevolution');
  }
}
