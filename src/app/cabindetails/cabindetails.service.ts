import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CabindetailsService {

  private baseUrl: string = environment.ApiUrlhome;

  constructor(
    private http:HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
      // console.log(this.router.url);
      // let text = this.router.url;
      // let result = text.substr(8,9);
    }

    getBedBanner(): Observable<any>{    
      return this.http.get<any>(this.baseUrl + 'admin/api/get_bed_content');
    }

  getCabinDetail(): Observable<any>{
    
    let text = this.router.url;
    let result = text.substr(8,9);
    const data={"cabin_id":result};
    return this.http.post<any>(this.baseUrl + 'admin/api/get_cabin_details_by_id',data);
  }

}
