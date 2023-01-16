import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { AdminService } from 'src/app/services/admin.service';
import { EditprofileComponent } from 'src/app/Users/editprofile/editprofile.component';

@Component({
  selector: 'app-vessel-header',
  templateUrl: './vessel-header.component.html',
  styleUrls: ['./vessel-header.component.css']
})
export class VesselHeaderComponent implements OnInit {
  id:any
  role:any
  searchResult:undefined|any
  constructor(private route:Router ,private dialog:MatDialog,private search :AdminService) { }

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

  navigate()
  {
    this.role=localStorage.getItem('Role') 
    if(this.role=='Admin')
    {
      this.route.navigate(['/adminLand'])
    }
    else
    {
      this.route.navigate(['/land'])
    }
    
  }
  searchVessel(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
      
      // console.warn(element.value)
      this.search.search(element.value).subscribe((result)=>{
        // console.warn(result);
        this.searchResult=result
        
        // if(result.length>5){
        //   result.length=5;
        // }
      })
    
     


    }

  }

  submitSearch(val:string){
    console.warn(val)
    this.route.navigate([`voyagetable/${val}`])
  }

}
