import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject,of, observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl: string = environment.ApiUrlhome;

  constructor( private http:HttpClient) { }

  getHome(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/get_content_for_home');
  }

}
