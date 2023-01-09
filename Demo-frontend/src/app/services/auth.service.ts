import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.apiUrl;
  constructor(private http: HttpClient,private route:Router,private dialog: MatDialog) { }
  loggedIn() 
  {
    return !!localStorage.getItem('Role')
  }

  getRole() 
  {
    return localStorage.getItem('Role')
  } 

}
