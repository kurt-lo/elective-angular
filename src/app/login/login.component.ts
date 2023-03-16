import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  firstName = '';
  lastName = '';
  errorMessage = '';

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  login(): void {
    this.http.get<any[]>('https://localhost:7297/api/User/GetUsers').subscribe(users => {
      const matchingUsers = users.filter(user => user.firstName === this.firstName && user.lastName === this.lastName);
      if (matchingUsers.length > 0) {
        this.sessionService.setLoggedInUser(matchingUsers[0]);
        // Redirect to home page or do whatever you want here
      } else {
        this.errorMessage = 'Invalid login';
      }
    }, error => {
      console.error(error);
      this.errorMessage = 'Error occurred during login';
    });
  }
}

interface API{
  id: number;
  firstName: String;
  lastName: String;
  username: String;
  enrollmentDate: Date;
}

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { SessionService } from '../session.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   firstName = '';
//   lastName = '';
  
//   title = 'api';
//   url = 'https://localhost:7297/api/User/GetUsers';
//   public fetch?:API[];
//   constructor(http: HttpClient, private sessionService: SessionService){
//     http.get<API[]>(this.url).subscribe(result=>{
//       this.fetch=result;
//     }, error=>console.error(error))
//   }
// }

// interface API{
//   id: number;
//   firstName: String;
//   lastName: String;
//   username: String;
//   enrollmentDate: Date;
// }
