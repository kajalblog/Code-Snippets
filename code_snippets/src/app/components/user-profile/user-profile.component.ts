import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Employee } from '../../../modal/employee';
// import { HighlightDirective } from '../../../directives/highlight.directive';
import  {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs'
import {filter} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
// import { Modal } from 'bootstrap'; // Bootstrap 5 modal type

function formatName(value:string)
{
  return "Hi " +value
}
@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit,OnDestroy,OnChanges,AfterViewInit {

  @Input({alias:'userName'}) name:any='';
  @Input({transform:booleanAttribute}) isAdmin!:boolean;
  @Input({transform:numberAttribute}) sallary!:string;

  @Output() myEvent=new EventEmitter<Employee>();
  bgColor:string='red';
  showMsg:boolean=false;
  @ViewChild('userList') heading?:ElementRef;

    @ViewChild('myModal') modalElement!: ElementRef;
  // private modalInstance!: Modal;
  private subscription: Subscription = new Subscription;
  // employeeList = [
  //   { id: 1, name: 'Ritesh', sallary: 60000 },
  //   { id: 2, name: 'Pritesh', sallary: 10000 },
  //   { id: 3, name: 'Sarvesh', sallary: 70000 },
  // ]
  constructor()
  {
    // called when class instance created
    console.log('Constructor UserName',this.name);
    console.log('Constructor viewchild',this.heading?.nativeElement.textContent);

  }
  ngOnInit(): void {
    // DI not cretaed in ngOninit
    // called when component ready
    // console.log('ngOnInit UserName',this.name);
    // console.log('ngOnInit viewchild',this.heading?.nativeElement.textContent);

    // Promise
    const pData=new Promise(resolver=>{
      setTimeout(() => {
      resolver("Promise Working");
      resolver("Promise Working1");
      resolver("Promise Working2");
      resolver("Promise Working3");
      resolver("Promise Working4");
        
      }, 1000);
    })
    pData.then((result)=>{
      console.log(result)
    })

    // Observable
const obj=new Observable(data=>{
  setTimeout(() => {
  data.next('Observable Working');
  data.next('Observable Working1');
  data.next('Observable Working2');
  data.next('Observable Working3');

    
  }, 1000);
});
obj.pipe(
  filter(d=>d==="Observable Working1")
).subscribe((res)=>{
  console.log(res)
})


 const obj2=new Observable(data=>{
  // setInterval(() => {
  // data.next('Observable Working Obj2');
  // }, 1000);
});

this.subscription=obj2.subscribe((res)=>{
  console.log(res)
})

// Observable are unicast
// Subject are multicast
// UniCast->Each subscribed observer own an independent execution of the observable(each subscriber give same result but call multiple time)

// Observable Unicast
const observable=new Observable((sub)=>{
  sub.next(Math.random())
})
observable.subscribe((res)=>console.log("res",res));
observable.subscribe((res)=>console.log("res1",res))

// Subject Multicast
const sub=new Subject();
sub.subscribe((res)=>console.log("sub",res));
sub.subscribe((res)=>console.log("sub1",res));
sub.subscribe((res)=>console.log("sub2",res));
sub.subscribe((res)=>console.log("sub3",res));

sub.next(Math.random())
// real example
const apiSub=new Subject();
const api=ajax("https://jsonplaceholder.typicode.com/users");
// api.subscribe((d)=>console.log(d));
// api.subscribe((d)=>console.log(d));
apiSub.subscribe(d=>{
  // apiSub.next(d);
  console.log(d)});
apiSub.subscribe(d=>console.log(d));

const result=api.subscribe(apiSub);

const bSubject=new BehaviorSubject<number>(16);
bSubject.subscribe((d)=>console.log("Behavior Sub",d));
bSubject.next(20)
bSubject.subscribe((d)=>console.log("Behavior Sub1",d));



  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("onchnages",changes);
    // console.log('ngOnChanges viewchild',this.heading?.nativeElement.textContent);

  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit viewchild',this.heading?.nativeElement.textContent);

  }
  sendData()
  {
    this.myEvent.emit({name:this.name,newSallary:75000});
    // this.showMsg=true;
    // console.log(this.showMsg);
  }

    openModal() {

    // this.modalInstance.show();
  }

  closeModal() {
    // this.modalInstance.hide();
  }
  ngOnDestroy(): void {
    console.log("destroed");
    this.subscription.unsubscribe()
  }
  




}
