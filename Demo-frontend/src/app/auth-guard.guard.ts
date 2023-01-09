import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authserv: AuthService, private route: Router) {}
  canActivate(): boolean {
    if (this.authserv.loggedIn()) {
      if (localStorage.getItem('Role') == 'Admin' || 'user') {
        return true;
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('Id');
        localStorage.removeItem('username');
        localStorage.removeItem('Role');
        this.route.navigate(['']);
        console.log('true');
        return false;
      }
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('Id');
      localStorage.removeItem('username');
      localStorage.removeItem('Role');
      this.route.navigate(['']);
      return false;
    }
  }
}
