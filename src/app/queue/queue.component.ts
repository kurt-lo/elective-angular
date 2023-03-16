import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})

export class QueueComponent {
  queueNumber: number;
  queueName: string;

  constructor(private http: HttpClient) {
    this.queueNumber = 0; // initialize queueNumber to 0
    this.queueName = '';
   }

  insertQueue() {
    this.http.post('https://localhost:7297/api/Queue/InsertQueue', 
    { queue_number: this.queueNumber, student_id: this.queueName }).subscribe(response => {
      console.log(response);
      // Do something with the response
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-queue',
//   templateUrl: './queue.component.html',
//   styleUrls: ['./queue.component.css']
// })

// export class QueueComponent implements OnInit{

//   apiUrl = 'https://localhost:7297/api/Queue';
//   Queue_number = 0;
//   queueList: QueueItem[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getQueueList();
//   }

//   addToQueue() {
//     this.Queue_number++;
//     this.http.post<void>(`${this.apiUrl}/InsertQueue`, { queueNumber: this.Queue_number })
//       .subscribe(() => {
//         this.getQueueList();
//       }, (error) => {
//         console.error(error);
//         this.Queue_number--; // decrement queueNumber to undo the increment
//       });
//   }

//   getQueueList() {
//     this.http.get<QueueItem[]>(`${this.apiUrl}/GetQueue`).subscribe(data => {
//       this.queueList = data;
//       if (data.length > 0) {
//         this.Queue_number = data[data.length - 1].Queue_number;
//       } else {
//         this.Queue_number = 0;
//       }
//     }, error => {
//       console.error(error);
//       this.Queue_number = 0;
//     });
//   }

//   resetQueue() {
//     this.Queue_number = 0;
//   }

  
// }
// interface QueueItem {
//   Idqueue: number;
//   Queue_number: number;
// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-queue',
//   templateUrl: './queue.component.html',
//   styleUrls: ['./queue.component.css']
// })
// export class QueueComponent {
//   queueNumber: number = 0;
//   constructor(private http: HttpClient) { }

//   addToQueue() {
//     this.http.post<void>('https://localhost:7297/api/Queue/InsertQueue', {}).subscribe(() => {
//       this.http.get<QueueItem[]>('https://localhost:7297/api/Queue/GetQueue').subscribe((data) => {
//         console.log('GetQueue response:', data);
//       if (data.length > 0) {
//     this.queueNumber = data[data.length - 1].queueNumber;
//   } else {
//     this.queueNumber = 0;
//     console.log('queueNumber:', this.queueNumber);
//   }
// });
//     });
//   }  
  
//   resetQueue() {
//     this.http.delete('https://localhost:7297/api/Queue/DeleteQueue').subscribe(() => {
//       this.queueNumber = 0;
//     });
//   }
  
// }

// interface QueueItem {
//   id: number;
//   queueNumber: number;
// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-queue',
//   templateUrl: './queue.component.html',
//   styleUrls: ['./queue.component.css']
// })
// export class QueueComponent implements OnInit {
//   apiUrl = 'https://localhost:7297/api/Queue';
//   queueNumber: number = 0;
//   lastQueueNumber: number = 0;
//   queueList!: any[];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.getQueueList();
//     this.getQueue();
//   }

//   getQueueList() {
//     this.http.get<any>('https://localhost:7297/api/Queue/GetQueue').subscribe(data => {
//       this.queueList = data;
//       this.lastQueueNumber = data[data.length - 1].queue_number;
//       console.log(this.queueList);
//     });
//   }

//   incrementQueueNumber() {
//     this.lastQueueNumber++;
//     this.queueNumber = this.lastQueueNumber;
//   }

//   resetQueueNumber() {
//     this.queueNumber = 0;
//     this.lastQueueNumber = 0;
//   }

//   addQueue() {
//     this.queueNumber++;
//     this.http.post<any>(`${this.apiUrl}/InsertQueue`, { queue_number: this.queueNumber })
//       .subscribe(data => {
//         console.log(data);
//         this.getQueue();
//       });
//   }
  

//   deleteQueue(id: number) {
//     this.http.delete<any>('https://localhost:7297/api/Queue/DeleteQueue/' + id).subscribe(data => {
//       console.log(data);
//       this.getQueueList();
//     });
//   }

//   getQueue() {
//     this.http.get<any[]>(`${this.apiUrl}/GetQueue`)
//       .subscribe(data => {
//         console.log(data);
//         this.queueList = data;
//       });
//   }
  
// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface QueueItem {
//   id: number;
//   queueNumber: number;
// }

// @Component({
//   selector: 'app-queue',
//   templateUrl: './queue.component.html',
//   styleUrls: ['./queue.component.css']
// })
// export class QueueComponent implements OnInit {
//   apiUrl = 'https://localhost:7297/api/Queue';
//   queueNumber = 0;
//   queueList: QueueItem[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getQueueList();
//   }

//   getQueueList() {
//     this.http.get<QueueItem[]>(`${this.apiUrl}/GetQueue`).subscribe(data => {
//       this.queueList = data;
//       if (data.length > 0) {
//         this.queueNumber = data[data.length - 1].queueNumber;
//       } else {
//         this.queueNumber = 0;
//       }
//     });
//   }

//   addToQueue() {
//     this.queueNumber++;
//     this.http.post<void>(`${this.apiUrl}/InsertQueue`, { queueNumber: this.queueNumber }).subscribe(() => {
//       this.getQueueList();
//     });
//   }

//   resetQueue() {
//     this.http.delete<void>(`${this.apiUrl}/DeleteQueue`).subscribe(() => {
//       this.getQueueList();
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface QueueItem {
//   id: number;
//   queueNumber: number;
// }

// @Component({
//   selector: 'app-queue',
//   templateUrl: './queue.component.html',
//   styleUrls: ['./queue.component.css']
// })
// export class QueueComponent implements OnInit {
//   apiUrl = 'https://localhost:7297/api/Queue';
//   queueNumber = 0;
//   queueList: QueueItem[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getQueueList();
//   }

//   getQueueList() {
//     this.http.get<QueueItem[]>(`${this.apiUrl}/GetQueue`).subscribe(data => {
//       this.queueList = data;
//       if (data.length > 0) {
//         // Get the largest queue number from the list
//         const largestQueueNumber = Math.max(...data.map(item => item.queueNumber));
//         this.queueNumber = largestQueueNumber;
//       } else {
//         this.queueNumber = 0;
//       }
//     });
//   }

//   addToQueue() {
//     // Increment the queueNumber before sending the POST request
//     this.queueNumber++;
//     this.http.post<void>(`${this.apiUrl}/InsertQueue`, { queueNumber: this.queueNumber }).subscribe(() => {
//       this.getQueueList();
//     });
//   }

//   resetQueue() {
//     this.http.delete<void>(`${this.apiUrl}/DeleteQueue`).subscribe(() => {
//       this.getQueueList();
//     });
//   }
// }




