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
GetAllVesselForExcel()
{
  return this.http.get(this.URL + '/admin/getallvesselforexcel')
}

GetAllVesselsIds()
{
  return this.http.get(this.URL + '/admin/getallvesselsIds')
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
EditVessel(id:any,data:any)
{
  return this.http.put(this.URL +`/admin/editvessel/${id}`,data)
}
GetVesselNameByVesselUserMapping(id:any)
{
  return this.http.get(this.URL +`/admin/vesselNameVU/${id}`)
}

GetVesselId(id:any)
{
  return this.http.get(this.URL +`/admin/getvesselId/${id}`)
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message,action, {
    horizontalPosition:'right',
    verticalPosition: 'top',
      duration: 3000,
      panelClass: ['green-snackbar'],
      
    
  });
}

openForgotSnackBar(message: string, action: string) {
  this._snackBar.open(message,action, {
    horizontalPosition:'center',
    verticalPosition: 'bottom',
      duration: 3000,
      panelClass: ['green-snackbar'],
      
    
  });
}

CheckIMONumber(data:any) 
{
  return this.http.post(this.URL +`/admin/checkimonumber`,data)
}
CheckVesselName(data:any) 
{
  return this.http.post(this.URL +`/admin/checkvesselname`,data)
}


//New Change
GetVesselCount(id:any)
{
  return this.http.get(this.URL +`/admin /vessel_count${id}`) 
}

}
