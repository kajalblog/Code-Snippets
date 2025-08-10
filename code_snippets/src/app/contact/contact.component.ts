import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  Result:string='';
  // message
  constructor(
    private notify:NotificationService
  )
  {

  }
  // sendMsg(data:any)
  // { 
  //   debugger
  //   console.log(data)
  //   this.notify.notifySubject.next(data);
  // //  console.log(res)
  // }

  onRoleChange(data:string)
  {
    this.notify.sendNotification("Test")
  }
}
