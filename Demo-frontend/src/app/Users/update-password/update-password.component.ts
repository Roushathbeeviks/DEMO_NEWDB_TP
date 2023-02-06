import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { VesselService } from 'src/app/services/vessel.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  UpdatePassword:any=FormGroup;
  msg:string=""
  constructor(private formBuilder: FormBuilder,
    private adminserv: AdminService,
    private vesselserv:VesselService) { }

  ngOnInit(): void {
    this.UpdatePassword = this.formBuilder.group
    ({
    email:[],
    password:[],
    password2:[] 
  });
  }

  update()
  {
    console.log("tes1")
    console.log("tes2",this.UpdatePassword.value.password)
    console.log("test3",this.UpdatePassword.value.password2)

    if(this.UpdatePassword.value.password===this.UpdatePassword.value.password2) {
      this.adminserv.UpdatePassword(this.UpdatePassword.value).subscribe((res:any)=>
      {
        
        console.log("test4",res.status)
       if(res.status === false)
       {
        this.vesselserv.openSnackBar("No user exists with this email","ok")
       }
       else
       {
        this.vesselserv.openSnackBar("Password Changed","ok")
       }
      })
    }
    else{
      this.msg="Mismatch in password"
    }
  }
}
