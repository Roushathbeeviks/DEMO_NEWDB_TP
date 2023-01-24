import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoyageplanService {
  URL = environment.apiUrl;
  // private vesselIdForVoyage = new BehaviorSubject('');
  // VesselIdVoyagetMessage = this.vesselIdForVoyage.asObservable();

  constructor(private http: HttpClient) {}
  // updateApprovalMessage(vesselId:any) 
  // {
  //   this.vesselIdForVoyage.next(vesselId)
  // }

  VoyageForm(data: any) 
  {
    return this.http.post(this.URL +'/admin/postvoyageplan',data)
  }
  GetVoyagePlan()
  {
    return this.http.get(this.URL +`/admin/voyageplandetails`)
  }
  GetVoyagePlanByVesselId(id:any)
  {
    return this.http.get(this.URL +`/admin/voyageplandetails/${id}`)
  }
  GetVoyagePlanByVoyageId(id:any)
  {
    return this.http.get(this.URL +`/admin//voyageplandetailsbyvoyageid/${id}`)
  }
  GetStartPort()
  {
    return this.http.get(this.URL +'/admin/startport')
  }
  GetDestinationPort()
  {
    return this.http.get(this.URL +'/admin/destinationport')
  }
  GeDestinationPortById(id:any)
  {
    return this.http.get(this.URL +`/admin/destinationportbyid/${id}`)
  }
  GetStartPortById(id:any)
  {
    return this.http.get(this.URL +`/admin/startportbyid/${id}`)
  }
  EditVoyage(id:any,data:any)
  {
    return this.http.put(this.URL +`/admin/editvoyage/${id}`,data)
  }
  DeletVoyage(id:any)
  {
    return this.http.delete(this.URL+`/admin/deletevoyage/${id}`)
  }
}
