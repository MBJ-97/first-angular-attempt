import { Component, OnInit } from '@angular/core';
import {trigger, animate, transition, state, style} from '@angular/animations';


@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrls: ['./button-main.component.scss'],
  animations: [
    trigger('btnAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      
     })),
     state('active', style({
       transform: 'scale(1.5)'
     })),

     transition('active <=> inactive', animate('500ms 100ms ease-in-out'))
    ])

 ]
  
})
export class ButtonMainComponent implements OnInit {

  buttonState= 'inactive'; 

  animateBtn () {
    this.buttonState = (this.buttonState === 'inactive' ? 'active' : 'inactive');
  }
  constructor() { }

  ngOnInit() {
  }

}
