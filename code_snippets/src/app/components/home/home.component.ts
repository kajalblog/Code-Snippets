import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../modal/employee';

@Component({
  selector: 'app-home',
  imports: [CommonModule, UserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'code_snippets';
  employeeList = [
    { id: 1, name: 'Ritesh', sallary: 60000 },
    { id: 2, name: 'Pritesh', sallary: 10000 },
    { id: 3, name: 'Sarvesh', sallary: 70000 },
  ]


  onValueChange(e: Event) {
    this.title = (e.target as HTMLInputElement).value;
  }

  getChildData(e: Employee) {
    console.log(e);
    const empIndex = this.employeeList.findIndex((emp: any) => {
      console.log(emp.name,e.name);
      if(emp.name === e.name )
      {

        return emp;
      }
      
    });
    console.log(empIndex);
    // console.log(
    //   this.employeeList.find((emp: any) => {
    //     // console.log(emp);
    //     emp.name == e.name
    //   })
    // );
    // console.log(this.employeeList[empIndex]);
    this.employeeList[empIndex].sallary = e.newSallary;
  }
  onclear()
  {
    this.employeeList=[];
  }
}
