import { Routes } from '@angular/router';

import {HomeComponent} from 'src/app/container/home/home.component';
import {NotFoundComponent} from 'src/app/shared/error-components/not-found/not-found.component';

export const routes: Routes=[
  {
    path: '',component:HomeComponent
  },
  {
    path:'todo',loadChildren: ()=> import('src/app/todo/todo.module').then(t => t.TodoModule)
  },
  {
    path:'',redirectTo:'',pathMatch:'full'
  },
  {
    path:'**',component:NotFoundComponent
  }
]
