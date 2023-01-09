import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { AdminService } from 'src/app/services/admin.service';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  check=false;
  id:any
  users:any=""
  constructor(private dialog: MatDialog,private adminserv:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('Id')
       this.adminserv.AllUsers().subscribe((res:any) =>{
      // console.log(res.message)
      this.users=res.message
      // console.log(this.users.Id)
    
  })
}


  show(){
    this.check=true;
  }

  EditDialog(id:any)
  {
    this.id=localStorage.getItem('Id') 
    // this.router.navigate(['/editprofile',this.id])
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
