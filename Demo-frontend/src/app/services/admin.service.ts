import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  SignupUser(data: any) {
    return this.http.post(this.URL + '/user/signup', data);
  }

  CheckEmail(data: any) {
    return this.http.post(this.URL + '/user/Checkemail', data);
  }

  CheckId(data: any) {
    return this.http.post(this.URL + '/user/CheckId', data);
  }

  Login(data: any) {
    return this.http.post(this.URL + '/user/login', data, {
      // observe: 'body',
      // headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
  EditProfile(id: any, data: any) {
    return this.http.put(this.URL + `/user/editprofile/${id}`, data);
  }
  GetUserById(id: any) {
    return this.http.get(this.URL + `/user/getuserById/${id}`);
  }
  GetLoginDetails() {
    return this.http.get(this.URL + '/user/getlogin');
  }

  ForgotPassword(data: any) {
    return this.http.post(this.URL + '/user/forgotpassword', data);
  }
  UpdatePassword(data: any) {
    return this.http.post(this.URL +'/user/updatepassword',data);
  }

   AllUsers() {
    return this.http.get(this.URL + '/user/getallusers');
  }
  AllUsersForExcel() {
    return this.http.get(this.URL + '/user/getallusersforexcel');
  }
 
  DeleteUser(id:any){
    return this.http.delete(this.URL + `/user/deleteuser/${id}`, id);
  }
  search(query:string) {
    return this.http.get(this.URL+`/admin/getvesselname?q=${query}`);
  }
  searchUser(query:any,){
    //  return this.http.get(this.URL +`/admin/getvessel/${query}`)
    return this.http.get(this.URL +`/admin/getvessel/${query}`)
  }
  PostLoginHistory(user_id:any) {
    return this.http.post(this.URL+`/admin/postloginhistory`, user_id)
  }
  GetLoginHistory(id:any){
    return this.http.get(this.URL+`/admin/getloginhistory/${id}`);
  }
}
