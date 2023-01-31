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
  searchResult:undefined|any
  constructor(private dialog: MatDialog,private adminserv:AdminService,private route:Router,private router:Router,private search :AdminService) { }

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
      },
    
      
    })
  }


  LogoutDialog(){
    this.dialog.open(LogoutComponent, {
       
       
    });
  }
  searchVessel(query:KeyboardEvent){
    if(query){
      const element= localStorage.getItem('Id')
      
      // console.warn(element.value)
      this.search.searchUser(element).subscribe((result)=>{
        // console.warn(result);
        this.searchResult=result
        console.warn(result)
      })
    
    }

  }

  submitSearch(val:string){
    console.warn(val)
    this.router.navigate([`voyagetable/${val}`])
  }
 
  navigate(id:any){
    console.log("ss",id)
    this.route.navigate([`../voyagetable/${id}`])
    console.log("ss",id)
  }
}
