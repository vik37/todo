import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Todo} from 'src/app/shared/models/todo.interface';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _url:string=environment._url;
  constructor(private http: HttpClient) {
   }

  getTodoList(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this._url).pipe(
      map(data =>  (data as Todo[]))
    )
  }
  postTodoList(entity:Todo): Observable<Todo>{
    return this.http.post<Todo>(this._url,entity).pipe(
      map(res=>(res as Todo))
    )
  }

}

