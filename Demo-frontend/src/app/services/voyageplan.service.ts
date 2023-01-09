import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoyageplanService {
  URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  VoyagePlan(data: any) 
  {
    return this.http.post(this.URL +'/admin/voyageplan',data)
  }
  GetVoyagePlan()
  {
    return this.http.get(this.URL +'/admin/voyageplandetails')
  }
  GetVoyagePath()
  {
    return this.http.get(this.URL +'/admin/voyagepath')
  }


}
