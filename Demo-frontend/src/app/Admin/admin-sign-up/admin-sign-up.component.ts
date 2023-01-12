import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import {FormBuilder,FormControl,FormGroup,MinLengthValidator,} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
// import { DatePipe } from "@angular/common";
// import { DateTimeModel } from "./date-time.model";

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css'],
})
export class AdminSignUpComponent implements OnInit {
  signup: any = FormGroup;
  UsernameCheckmsg:string=""
  EmailCheckmsg:string=""
  status:boolean=true
  

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private adminserv: AdminService,
    private titleCasePipe: TitleCasePipe
  ) {}

  check() {
    // this.signup.value=this.titleCasePipe.transform(this.signup.value)
    // console.log(this.signup.value);
    this.adminserv.SignupUser(this.signup.value).subscribe((res) => {
      console.log(res);
    });
     this.route.navigate(['/usermgt'])
  }
  CheckEmail()
  {
    
    this.adminserv.CheckEmail(this.signup.value).subscribe((res:any) => {
    if(res.status==true)
    {
      this.EmailCheckmsg=res?.message
      // reload()
    }
    else{
      this.status=false
      this.EmailCheckmsg = ""
    }
    
    })
  }
  CheckId(e:any)
  {

    this.adminserv.CheckId(this.signup.value).subscribe((res:any) => {
      console.log(res)
      if(res.status==true)
      {
        this.UsernameCheckmsg = res?.message;
      }
      else{
        this.status=false
        this.UsernameCheckmsg = ""
      }
    }
    )
  }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      first_name: ['',[  Validators.required,  Validators.minLength(2),  Validators.pattern('[a-zA-z].*'),]],
      last_name: [ '',[  Validators.required,  Validators.minLength(2),  Validators.maxLength(10),  Validators.pattern('[a-zA-z].*'),],],
      email: ['', [Validators.required, Validators.email]],
      contact_number: [ '', [   Validators.required,   Validators.minLength(2),   Validators.maxLength(10),   Validators.pattern('[0-9]*'), ],],
      password: ['', [Validators.required]],
      role: ['', Validators.required]
    });

  //   let first_name=this.signup.get("first_name");
  //   let last_name=this.signup.get("last_name");
  //   let username=this.signup.get("username");

  //   first_name.valueChanges.subscribe((data:any) => {
  //     this.signup.patchValue({
  //       first_name:this.titleCasePipe.transform(data)
  //     })
  //   }),
  //   last_name.valueChanges.subscribe((data:any) => {
  //       this.signup.patchValue({
  //         last_name:this.titleCasePipe.transform(data)
  //  })
  // }),
  //  username.valueChanges.subscribe((data:any) => {
  //         this.signup.patchValue({
  //           username:this.titleCasePipe.transform(data)
  //         })
        
  //   })


    
  }
  // get username() {
  //   return this.signup.get('Userid') as FormControl;
  // }
  // get first_name() {
  //   return this.signup.get('firstname') as FormControl;
  // }
  // get last_name() {
  //   return this.signup.get('lastname') as FormControl;
  // }
  // get email() {
  //   return this.signup.get('email') as FormControl;
  // }
  // get contact_number() {
  //   return this.signup.get('contactnumber') as FormControl;
  // }
  // get password() {
  //   return this.signup.get('password') as FormControl;
  // }
  // get role() {
  //   return this.signup.get('role') as FormControl;
  // }
}
