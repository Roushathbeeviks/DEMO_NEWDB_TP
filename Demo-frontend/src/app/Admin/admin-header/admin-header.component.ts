import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { EditprofileComponent } from 'src/app/Users/editprofile/editprofile.component';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  id:any
  constructor(private route:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  EditDialog()
  {
    this.id=localStorage.getItem('Id') 
    this.dialog.open(EditprofileComponent, {
    
      data: {
        data: this.id,
      },
    })
  }
  LogoutDialog(){
    this.dialog.open(LogoutComponent, {
        
    });
  }

}
