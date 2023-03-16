import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  idqueue!: number;
  queue_number!: number;
  student_id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.idqueue = this.route.snapshot.params['idqueue'];
  }

  onSubmit(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const updateUrl = `https://localhost:7297/api/Queue/UpdateQueue/${this.idqueue}`;
    const body = {
      idqueue: this.idqueue,
      queue_number: this.queue_number,
      student_id: this.student_id
    };
    console.log(body);
    this.http.put("https://localhost:7297/api/Queue/UpdateQueue", body, { headers }).subscribe(
      () => {
        // Handle success
        console.log('Data updated successfully.');
      },
      (error) => {
        // Handle error
        console.error('An error occurred while updating data:', error);
      }
    );
  }
  cancel(){
  }
}

interface API{
  idqueue: number;
  queue_number: number;
  student_id: string;
}