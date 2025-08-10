import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeComponent } from '../../employee/employee.component';
declare var bootstrap: any;
@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule,CommonModule,EmployeeComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  @ViewChild('addEmployee') addEmployee! :ElementRef;
    @ViewChild('modalRef') modalRef!: ElementRef;
  modalInstance: any;
empService=inject(EmployeeService)
  cards = [
  { title: 'Total Users', value: 125, icon: 'bi-people-fill',borderGradient: 'linear-gradient(180deg, #396afc, #2948ff)'  },
  { title: 'Bookings', value: 87, icon: 'bi-calendar-check',borderGradient: 'linear-gradient(180deg, #ff6a00, #ee0979)' },
  { title: 'Revenue', value: '₹18,400', icon: 'bi-currency-rupee',borderGradient: 'linear-gradient(180deg, #56ab2f, #a8e063)' },
   {
    title: 'Vehicles',
    description: 'Total serviced',
    value: 230,
    borderGradient: 'linear-gradient(180deg, #396afc, #2948ff)',
    iconClass: 'bi bi-car-front-fill'
  }
];
users = [
  { name: 'Alice', email: 'alice@example.com', status: 'active' },
  { name: 'Bob', email: 'bob@example.com', status: 'inactive' },
  { name: 'Charlie', email: 'charlie@example.com', status: 'active' }
];
  constructor()
  {

  }

  ngOnInit()
  {
    this.getEmployees();
  }
 ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.modalRef.nativeElement);
  }

getEmployees()
{
  this.empService.getAllEmp().subscribe({
    next:(res:any)=>{
console.log("Res",res.data);
    },
    error:()=>{

    }
  })
}

editUser(user: any) {
  console.log('Edit', user);
}

deleteUser(user: any) {
  console.log('Delete', user);
}

viewUser(user: any) {
  console.log('View', user);
}

openAddUser()
{
   this.modalInstance.show();
  // if(this.addEmployee?.nativeElement)
  // {

  //   this.addEmployee.nativeElement.style.display='block';
  // }
}

closeModal()
{
  this.modalInstance.hide();
  // if(this.addEmployee)
  // {

  //   this.addEmployee.nativeElement.style.display='none';
  // }
}
}
