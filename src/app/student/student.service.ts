import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = "https://localhost:7297/api/User/"
  //define the header options
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  //getting all the records
  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL + 'GetUsers')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //create method
  //edit method
  //update method


  //error handler
  errorHandler(error:any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.errorMessage;
    }
    else{
      errorMessage = 'Error code: ${error.status}\Message: ${error.message}';
    }
    return throwError(errorMessage)
  }
}
