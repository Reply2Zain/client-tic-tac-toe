import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  rando: any;

  @Input() value: 'X' | 'O' | undefined;

  constructor() {
    // setInterval(()=> this.rando = Math.random(), 3000)
    
   }

}
