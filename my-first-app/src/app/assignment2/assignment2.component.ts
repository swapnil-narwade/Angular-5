import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username = ""
  constructor() { }

  ngOnInit() {
  }
onUpdateServerName(event:any){
  this.username = (<HTMLInputElement  >event.target).value;
}
ifEmptyString(){
  if (this.username.length <=10)
    return true;
  else
    return false;
}
onClickButton(){
  this.username = "";
}
}
