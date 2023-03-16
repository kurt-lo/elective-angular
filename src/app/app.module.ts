import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NamesComponent } from './names/names.component';
import { TableComponent } from './table/table.component';
import { StudentModule } from './student/student.module';
import { SessionComponent } from './session/session.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { QueueComponent } from './queue/queue.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    TableComponent,
    SessionComponent,
    LoginComponent,
    QueueComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StudentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
