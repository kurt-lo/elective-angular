import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  setLoggedInUser(arg0: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  login(firstName: string, lastName: string): Observable<any> {
    const body = { firstName: firstName, lastName: lastName };
    return this.http.post('/api/login', body);
  }  

}
