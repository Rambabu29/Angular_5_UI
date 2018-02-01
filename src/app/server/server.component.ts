import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class  ServerComponent {
 
 name : string =  'Ram';
 role: string = 'UI';
 dob: number = 1991;
 calculateage(){
 var cur = new Date().getFullYear();
 return cur - this.dob ;
 }

}