import { Component,OnChanges, SimpleChanges,Input } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.interface';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnChanges {

  @Input('complated-todo')complatedTodo:Todo | null=null;
  todo:Todo | null=null;
  finishDate:string='03-15-2022';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['complatedTodo'];
    if(change.firstChange){
      this.todo = change.currentValue;
    }
  }

}
