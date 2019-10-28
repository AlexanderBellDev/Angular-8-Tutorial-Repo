import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  public myId = 'TestId';
  disabled = true;
  hasError = false;
  public successClass = 'text-success';
  public isSpecial = false;
  public messageClasses = {
    'text-success' : !this.hasError,
    'text-danger' : this.hasError,
    'text-special' : this.isSpecial
  };
  constructor() { }

  ngOnInit() {
  }

}
