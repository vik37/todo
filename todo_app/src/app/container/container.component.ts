import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template:`
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class ContainerComponent {
  constructor() { }
}
