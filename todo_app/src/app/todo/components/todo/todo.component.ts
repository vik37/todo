import { Component, OnInit, OnDestroy,Output } from '@angular/core';
import { Subscription } from 'rxjs';


import {TodoService} from 'src/app/todo/services/todo.service';
import {Todo} from 'src/app/shared/models/todo.interface';
import {Status} from 'src/app/shared/enums/status.enum';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();
  todoList:Todo[]=[];
  status!:Status;
  @Output()activeTodo:Todo[]=[];
  @Output()complatedTodo:Todo[]=[];

  constructor(private todoService:TodoService) {

   }

  ngOnInit(): void {
    this.loadInitialValues();

  }

  loadInitialValues(): void{
    this._subscription.add(
      this.todoService.getTodoList().subscribe((data)=>{
        this.todoList = data
        this.loadActiveTodo(1);
        this.loadComplatedTodo();
      })
    )

  }
  loadActiveTodo(n:number):void{
    switch(n){
      case 1:
        this.activeTodo = this.todoList.filter(x => x.status === 1);
        break;
      case 2:
        this.activeTodo = this.todoList.filter(x => x.status === 1)
                                        .sort((a,b)=>a.name.localeCompare(b.name));
        break;
      case 3:
        this.activeTodo = this.todoList.filter(x => x.status === 1)
        .sort((a,b)=>new Date(a.date).getDate() - new Date(b.date).getDate());
      break;
    }
  }
  reset(n:number):void{
    this.loadActiveTodo(n);
  }
  sortAlphabet(n:number):void{
    this.loadActiveTodo(n);
  }
  sortByDate(n:number):void{
    this.loadActiveTodo(n);
  }
  loadComplatedTodo():void{
    this.complatedTodo = this.todoList.filter(x => x.status === 2);
  }
  removeById(id:number):void{
    console.log('event remove id',id);
    this.activeTodo = this.activeTodo.filter(x => x.id !== id);
  }
  changeStatus(id:number):void{
    const changeStatusTodo = this.activeTodo.map(todo=>{
      if(todo.id === id){
        return {...todo,status:Status.Completed}
      }

      return todo;
    }).find(x => x.id === id) as Todo;
    this.activeTodo = this.activeTodo.filter(x=>x.id !== id);
    this.complatedTodo.push(changeStatusTodo)
  }
  addTodo(todoValue:NgForm):void{
    const lastTodoId = this.todoList[this.todoList.length-1];
    let id = lastTodoId.id;
    const newTodo ={
      id:id+=1,
      name:todoValue.value.name,
      date:todoValue.value.date,
      status:1
    } as Todo;
    this.activeTodo.push(newTodo);
  }
  editTodo(todoEdit:Todo){
    this.activeTodo = this.activeTodo.filter(x => x.id !== todoEdit.id);
    this.activeTodo.push(todoEdit);
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
