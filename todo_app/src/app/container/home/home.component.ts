import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <main class="main-home">
    <section class="todo-nav">
      <div class="todo-img">
        <img [src]="['./assets/images/todolist.png']" alt="image-todolist" />
      </div>
      <button class="enter-exit" routerLink="/todo" type="button">ENTER</button>
    </section>
  </main>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

}
