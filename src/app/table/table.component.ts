import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  title = 'api';
  url = 'https://localhost:7297/api/Queue/GetQueue';

  router: Router;

  public fetch?:API[];
  constructor(private http: HttpClient, router: Router){
    this.router = router;
    http.get<API[]>(this.url).subscribe(result=>{
      this.fetch=result;
    }, error=>console.error(error))
  }
  
  onDelete(idqueue: number) {
    const deleteUrl = `https://localhost:7297/api/Queue/DeleteQueue/${idqueue}`;
    this.http.delete(deleteUrl).subscribe(result => {
      console.log('Delete successful', result);
      // update the UI by fetching the data again
      this.http.get<API[]>(this.url).subscribe(result => {
        this.fetch = result;
      }, error => console.error(error))
    }, error => console.error(error))
  }

  onUpdate(idqueue: number): void {
    this.router.navigate(['update/', idqueue]);
  }
  
  // onUpdate(idqueue: number, updatedData: any) {
  //   const updateUrl = `https://localhost:7297/api/Queue/UpdateQueue/${idqueue}`;
  //   this.http.put(updateUrl, updatedData).subscribe(result => {
  //     console.log('Update successful', result);
  //     // update the UI by fetching the data again
  //     this.http.get<API[]>(this.url).subscribe(result => {
  //       this.fetch = result;
  //     }, error => console.error(error))
  //   }, error => console.error(error))
  // }
  
}

interface API{
  idqueue: number;
  queue_number: number;
  student_id: string;
}

