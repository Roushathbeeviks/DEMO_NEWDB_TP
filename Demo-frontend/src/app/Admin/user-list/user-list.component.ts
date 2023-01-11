import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AdminService } from 'src/app/services/admin.service';
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';
import { EditprofileComponent } from 'src/app/Users/editprofile/editprofile.component';
import { VesselMappingComponent } from 'src/app/Vessel/vessel-mapping/vessel-mapping.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
rows:any[]=[]
columnMode='standard';
columns = [];
ColumnMode = ColumnMode;
id1:any
id:any
username:any
var:string=""
  constructor(private adminserv:AdminService,private route:Router,private dialog:MatDialog,private vesselmapserv:VesselMappingService) { }

  ngOnInit(): void {
    this.adminserv.AllUsers().subscribe((res:any)=>
    {
      this.rows = res.message;
      console.log(this.rows);
      // this.id=res.message.Userid;
      // console.log("users", this.rows);
      // console.log(this.id)
    });
  
  }

  EditDialog(id:any)
  {
    this.id=id
    this.dialog.open(EditprofileComponent, {
      data: {
        data: this.id,
      },
    })
  }
  navigate(){
    this.route.navigate(['/adminSignUp'])
  }
  Addvessel(username:any,id:any)
  {
    
    this.id = id;
    this.username = username;
    this.vesselmapserv.updateApprovalMessage(this.username)
    this.dialog.open(VesselMappingComponent,{
      data:id,
      height:"60%",
      width:"80%",
    })
  }

  delete($event:any,id:any) 
  {
     if(confirm("Do you want to delete this user"))
     {
      this.id=id;
       this.adminserv.DeleUser(this.id).subscribe((res:any)=>
       {
         console.log(res)
      //  this.toastr.success("Deleted successfully","sucees")
       this.ngOnInit();
      })
     
   }
 }

}