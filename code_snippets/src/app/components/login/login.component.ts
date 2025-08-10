import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../modal/Employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginUser:Employee=new Employee;
  router=inject(Router);
constructor(private empSer:EmployeeService)
{

}
onLogin()
{
this.empSer.login(this.loginUser).subscribe({
  next:(res:any)=>{
if(res.result){
alert("Login Success!");
localStorage.setItem('leaveUses',JSON.stringify(res.Data));
this.router.navigateByUrl('dashboard')

}
else{
  alert(res.message);
}
  },
  error:()=>{
    alert("API Error")

  }
})
}
}
