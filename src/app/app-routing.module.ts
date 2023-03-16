import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { TableComponent } from './table/table.component';
import { Student } from './student/student';
import { StudentModule } from './student/student.module';
import { QueueComponent } from './queue/queue.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: '/queue', pathMatch: 'full' },
  {path: 'queue', component: QueueComponent},
  {path: 'names', component: NamesComponent},
  {path: 'table', component: TableComponent},
  {path: 'update/:idqueue', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
