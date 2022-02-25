import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ContainerComponent } from 'src/app/container/container.component';
import { NotFoundComponent } from 'src/app/shared/error-components/not-found/not-found.component';
import { HeaderComponent } from './container/header/header.component';
import { HomeComponent } from './container/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
