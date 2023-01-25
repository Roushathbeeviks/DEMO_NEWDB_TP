import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { EditprofileComponent } from 'src/app/Users/editprofile/editprofile.component';

import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  id:any
 
  searchResult:undefined|any;
  
  constructor(private route:Router,private dialog: MatDialog,private search :AdminService) { }
   

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

  searchVessel(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
      // console.log(element.value)
      this.search.search(element.value).subscribe((result)=>{
        console.warn(result);
        this.searchResult=result
        
        // if(result.length>5){
        //   result.length=5;
        // }
    })
    
     


    }

  }
  hideSearch(){
    this.searchResult=undefined; 
  }
  submitSearch(){
    console.log("val")
    // this.route.navigate([`voyagetable/${val}`])
  }
  navigate(id:any){
    console.log("ss",id)
    this.route.navigate([`../voyagetable/${id}`])
    console.log("ss",id)
  }
}
