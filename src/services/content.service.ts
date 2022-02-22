import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor( private http: HttpClient ) { }

  getContent(page: string) {
    return this.http.get(`https://api.mwi.dev/content/${page}`).pipe(
      map((response: any) => {
        return response.data;
      })
    )
  }
}
