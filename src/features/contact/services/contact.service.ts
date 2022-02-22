import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { EMPTY } from "rxjs/internal/observable/empty";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { }

  sendContactInfo(info: any) {
    debugger;
    return this.http.post('https://api.mwi.dev/contact', info).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return EMPTY;
      })
    )
  }
}
