import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: any = FormGroup;
  arr: any = [];
  public msg: any = [];
  public avail: boolean = true;
  visible :boolean=true;
  x :undefined|any;
  t:any
  constructor(
    private route: Router,
    private adminserv: AdminService,
    private formBuider: FormBuilder,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.formBuider.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    // this.getUsers()
  }

  getUsers() {
    this.adminserv.AllUsers().subscribe((res) => {
      console.log(res);
      // this.arr = res.valueOf();
      // console.log(res);
      // this.arr=res
      // console.log(typeof this.arr)
    });
  }

  submit() {
    var formData = this.LoginForm.value;
    var data = {
      username: formData.username,
      password: formData.password,
    };

    this.adminserv.Login(data).subscribe((res: any) => {
      if (res.status) {
        console.log(res.Id);
        let role = res.Detail;
        if (role == 'admin') {
          localStorage.setItem('username',data.username);
          localStorage.setItem('Id',res['Id']);
          localStorage.setItem('token', res['token']);
          localStorage.setItem('Role', 'Admin');
          this.t=new Date();
          localStorage.setItem('Login Time',this.t);
          this.route.navigate(['/adminLand']);
        } else {
          localStorage.setItem('token', res['token']);
          localStorage.setItem('Id',res['Id']);
          localStorage.setItem('username',data.username);
          localStorage.setItem('Role', 'User');
          this.t=new Date();
          localStorage.setItem('Login Time', this.t.toDateString());
          this.route.navigate(['/land']);  
   
        }
      } else {
        this.msg = res?.message;
        // console.log(this.msg);
      }
    });
  }

  PasswordDialog()
  {
    this.dialog.open(ForgotpasswordComponent,{})
  }

   viewPass() {
    this.x = document.getElementById("password");
    if (this.x.type === "password") {
      this.x.type = "text";
    } else {
      this.x.type = "password";
    }
  }

}

// submit() {
//   var formData = this.LoginForm.value;
//   var data={
//     Userid:formData.Userid,
//     password: formData.password
//   }

//   for (var val of this.arr) {
//     var a = val['Userid'];
//     var b=data.Userid;
//     var c = val['password'];
//     var d = data.password;;
//     var e = val['role'];
//     var f="admin"
//   }
//   // console.log(a)
//   // console.log(b)

//   this.adminserv.Login(JSON.stringify(data)).subscribe((res)=>
//   {
//     console.log(res)
//     // JSON.stringify(res)
//     console.log( typeof res)
//     // alert(message);
//   })

// }
