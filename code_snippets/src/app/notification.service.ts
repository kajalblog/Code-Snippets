import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notifySubject =new BehaviorSubject<string>('');
  message$=this.notifySubject.asObservable();
  constructor() { }

  sendNotification(data:string)
  {
    console.log(data);
    this.notifySubject.next(data)
  }
}
