import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  public myId = 'TestId';
  disabled = true;
  hasError = true;
  public successClass = 'text-success';
  public isSpecial = false;
  public highlightColor = 'orange';
  public messageClasses = {
    'text-success' : !this.hasError,
    'text-danger' : this.hasError,
    'text-special' : this.isSpecial
  };

  public styles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  constructor() { }

  ngOnInit() {
  }

}
