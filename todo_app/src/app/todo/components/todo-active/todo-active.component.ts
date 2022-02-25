import { Component,Input,
          OnChanges, SimpleChanges,
          EventEmitter,Output, NgModule
} from '@angular/core';

import { Todo } from 'src/app/shared/models/todo.interface';
import {Status} from 'src/app/shared/enums/status.enum';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-active',
  templateUrl: './todo-active.component.html',
  styleUrls: ['./todo-active.component.css']
})
export class TodoActiveComponent implements OnChanges {
  @Input('active-todo')activeTodo:Todo | null=null;
  todo:Todo | null=null;
  edit:boolean=false;
  status!:Status;
  @Output() editTodoEvent:EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodoEvent:EventEmitter<number> = new EventEmitter<number>();
  @Output() changeToCompletedTodoEvent:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      let change = changes['activeTodo'];
      if(change.firstChange){
        this.todo = change.currentValue
      }

  }

  editToggle():void{
    this.edit = !this.edit
  }
  sendIdValueForRemoving(id:number):void{
    this.deleteTodoEvent.emit(id);
  }
  sendIdValueForChangeStatus(id:number):void{
    this.changeToCompletedTodoEvent.emit(id);
  }
  editSubmit(editFormValue:NgForm):void{
    const editTodo = {
      id:this.activeTodo!.id,
      name:editFormValue.valueChanges?editFormValue.value.name:this.activeTodo?.name,
      date:editFormValue.valueChanges?editFormValue.value.date:this.activeTodo?.date,
      status:this.activeTodo!.status
    } as Todo;
    this.editTodoEvent.emit(editTodo);
  }

}
