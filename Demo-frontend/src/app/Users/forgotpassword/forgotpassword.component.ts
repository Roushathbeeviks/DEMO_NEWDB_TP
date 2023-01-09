import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: any = FormGroup;
  constructor(
    private route: Router,
    private formBuider: FormBuilder,
    private adminserv: AdminService
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
    this.adminserv.ForgotPassword(data).subscribe((res)=>
    {
      console.log(res)
    });
  }
}
