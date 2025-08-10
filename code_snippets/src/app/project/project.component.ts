import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
result:string='';
  constructor(
    private notify:NotificationService
  )
  {
   
  }
  ngOnInit(): void {
    // console.log( this.notify.notifySubject)
    this.notify.notifySubject.subscribe((res:string)=>{
     this.result=res;
      console.log(res)
    })
  }

 

}
