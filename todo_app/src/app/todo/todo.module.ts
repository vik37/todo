import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from 'src/app/todo/components/todo/todo.component';
import {todoRoutes} from 'src/app/todo/todo-routes';
import {TodoService} from 'src/app/todo/services/todo.service';
import { TodoActiveComponent } from './components/todo-active/todo-active.component';
import { TodoCompletedComponent } from './components/todo-completed/todo-completed.component';
import { EnumTostringPipe } from 'src/app/shared/pipes/enum-tostring.pipe';


@NgModule({
  declarations: [
    TodoComponent,
    TodoActiveComponent,
    TodoCompletedComponent
    ,EnumTostringPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[TodoService]
})
export class TodoModule { }
