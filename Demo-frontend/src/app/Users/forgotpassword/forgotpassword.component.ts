import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { VesselService } from 'src/app/services/vessel.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: any = FormGroup;
  action:boolean = false;
  constructor(
    private route: Router,
    private formBuider: FormBuilder,
    private adminserv: AdminService,
    private vesselserv:VesselService,
    public dialogRef: MatDialogRef<ForgotpasswordComponent>
    
  ) {}

  ngOnInit(): void {
    this.forgotPassword = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get email() {
    return this.forgotPassword.get('email') as FormControl;
  }

submit() {
  var formData=this.forgotPassword.value;
  var data={
    email:formData.email
  }

  if(!this.forgotPassword.valid) {
    this.forgotPassword.markAllAsTouched();
  }
  else{
  this.adminserv.ForgotPassword(data).subscribe((res:any)=>
  {
    console.log(res.status)
    // console.log(data.email)
    if(res.status === true)
    {
      this.dialogRef.close(); 
      // this.vesselserv.openForgotSnackBar("Email Sent to your Email id","ok")
    }
    else{
      this.dialogRef.close(); 
    }
  });
}
}



}
