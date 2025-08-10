import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  login(obj:any)
  {
   return this.http.post('https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login',obj)
  }

getAllEmp():Observable<any>
{
  return this.http.get<any>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees")
}
}
