import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowUser = false;

  constructor() {
    setTimeout(() => {
      this.allowUser = true;
    }, 2000);
  }
  paragraph = "no server located ";
  onClickRun(){
    this.paragraph = "server located";
  }

  website : string = "www.swapnilnarwade@mavs.uta.edu" ;
  name : string = "swapnil";
  lastname : string = "narwade";
  idNuber : number = 100125;

getname(){
  return this.name;
}
ngOnInit() {
}

}
