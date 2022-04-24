import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CabinsService {

  private baseUrl: string = environment.ApiUrlhome;

  constructor(private http:HttpClient) { }

  getCanins(): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'admin/api/get_content_for_cabin');
  }

  // getCaninsMain(): Observable<any>{
  //   return this.http.get<any>(this.baseUrl + 'admin/api/get_cabin');
  // }
  
  postCaninsMain(): Observable<any> {
    const data={"cabin_type":"2"};
    return this.http.post<any>(this.baseUrl + 'admin/api/get_cabin',data);
  }
  postCaninsMainBed3(): Observable<any> {
    const data={"cabin_type":"3"};
    return this.http.post<any>(this.baseUrl + 'admin/api/get_cabin',data);
  }
  postCaninsMainBed4(): Observable<any> {
    const data={"cabin_type":"4"};
    return this.http.post<any>(this.baseUrl + 'admin/api/get_cabin',data);
  }
  postCaninsMainBed7(): Observable<any> {
    const data={"cabin_type":"7"};
    return this.http.post<any>(this.baseUrl + 'admin/api/get_cabin',data);
  }
  postCaninsMainBed12(): Observable<any> {
    const data={"cabin_type":"12"};
    return this.http.post<any>(this.baseUrl + 'admin/api/get_cabin',data);
  }

}
