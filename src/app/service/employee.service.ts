import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/employee";
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = '/assetfcvs/data/employees.json';
  constructor(private http: HttpClient) {
  }

  getEmployees() : Observable<Employee[]> {
  return this.http.get<Employee[]>(this._url);
  }


}
