import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
// import { SweetAlertOptions } from 'sweetalert2';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  Editprofile: any = FormGroup;
  users:any=[]
  paramid:any=[]
  id:any
  EmailCheckmsg:string=""
  status:boolean=true
  isreadOnly:boolean=true
  // alertOpt: SweetAlertOptions = {};
  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private adminserv: AdminService,
    private router:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:any,

  ) {}

  check() 
  {
    
   this.adminserv.EditProfile(this.data.data,this.Editprofile.value).subscribe((res:any) => {
    console.log(res);
    this.reloadPage();
   })
   
  }
  reloadPage(): void {
    window.location.reload();
  }


  ngOnInit(): void {
   this.adminserv.GetUserById(this.data.data).subscribe((res:any) => {
   console.log("param-id",this.data.data);
   this.Editprofile.patchValue({
    username:res.message[0].username,
    first_name:res.message[0].first_name,
    last_name:res.message[0].last_name,
    email:res.message[0].email,
    contact_number:res.message[0].contact_number
   }) 
   })

    this.Editprofile = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-z].*'),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('[a-zA-z].*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      contact_number: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
        ],
      ],
      
    });

    if (localStorage.getItem('Role') == 'Admin')
    {
      this.isreadOnly = false;
      console.log(localStorage.getItem('Role'))
    }
    else{
      this.isreadOnly = true;
      console.log(localStorage.getItem('Role'))
    }
    
  }

  CheckEmail()
  {
    
    this.adminserv.CheckEmail(this.Editprofile.value).subscribe((res:any) => {
    if(res.status==true)
    {
      this.EmailCheckmsg=res?.message
      console.log("ttttttt",this.EmailCheckmsg)
      // reload()
    }
    else{
      this.status=false
      this.EmailCheckmsg = ""
    }
    
    })
  }
}


