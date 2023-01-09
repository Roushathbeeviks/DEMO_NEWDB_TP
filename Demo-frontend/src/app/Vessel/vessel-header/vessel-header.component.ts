import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { EditprofileComponent } from 'src/app/Users/editprofile/editprofile.component';

@Component({
  selector: 'app-vessel-header',
  templateUrl: './vessel-header.component.html',
  styleUrls: ['./vessel-header.component.css']
})
export class VesselHeaderComponent implements OnInit {
  id:any

  constructor(private route:Router ,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  EditDialog()
  {
    this.id=localStorage.getItem('Id') 
    this.dialog.open(EditprofileComponent, {
      data: {
        data: this.id,
      }
      
    })
  }
  LogoutDialog(){
    this.dialog.open(LogoutComponent, {
        
    });
  }
}
