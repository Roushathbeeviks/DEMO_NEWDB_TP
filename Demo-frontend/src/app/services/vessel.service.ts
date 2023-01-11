import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class VesselService {
URL=environment.apiUrl
constructor(private http:HttpClient,private _snackBar: MatSnackBar) { }

VesselForm(data:any)
{
  return this.http.post(this.URL + '/admin/vesselform',data)
}
GetAllVessel()
{
  return this.http.get(this.URL + '/admin/getallvessel')
}
GetVesselById(id:any)
{
  return this.http.get(this.URL +`/admin/getvessel/${id}`)
}
GetVesselByVesselId(id:any)
{
  return this.http.get(this.URL +`/admin/getVesselByVesselId/${id}`)
}

GetAllFlags()
{
  return this.http.get(this.URL +'/admin/getflag')
}
GetAllVesselType()
{
  return this.http.get(this.URL +'/admin/getvesseltype')
}
DeleteVessel(id:any)
{
  return this.http.delete(this.URL + `/admin/deletevessel/${id}`)
}
EditProfile(id:any,data:any)
{
  return this.http.put(this.URL +`/admin/editvessel/${id}`,data)
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message,action, {
    horizontalPosition:'right',
    verticalPosition: 'top',
  });
}


}
