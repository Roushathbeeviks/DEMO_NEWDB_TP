import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  LogoutUser()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('Id');
    localStorage.removeItem('username');
    localStorage.removeItem('Role');
  }

}
