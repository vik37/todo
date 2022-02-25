import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <header>
      <h1>ToDo List</h1>
      <h5>Orginize your plans</h5>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

}
