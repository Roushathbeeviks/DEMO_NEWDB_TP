import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';
import { VesselService } from 'src/app/services/vessel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
data: any;
name:any;
term=''
myForm:any= FormGroup;
expanded = [];
errorPanles = [];
formSubmitted = false;

  constructor(private vesselserv:VesselService,
    private vesselmapserv:VesselMappingService,
    private route:Router,
   private fb: FormBuilder,
) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      personal: this.fb.group({
        fname: ['', [Validators.required]],
        lname: [''],
      }),
      work: this.fb.group({
        designation: ['', [Validators.required]],
        department: ['', [Validators.required]],
      }),
    });


    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      // console.log(res);
      this.data=res
      // console.log(this.data);
    })

    this.vesselmapserv.GetVesselNameFromVessel().subscribe((res:any)=>
    {
      // console.log(res);
      this.name=res

    })

 
  }

  submitSearch(val:string){
    console.warn(val)
    this.route.navigate([`voyagetable/${val}`])
  }
  move(id:any)
  {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
    console.warn("this.")
    })  
  }

  send(form:any)
   {
    this.formSubmitted = true;
    this.expanded = [];
    this.errorPanles = [];
    // this.appRef.tick();
    for (var key in form.controls) {
      if (form.controls[key].valid === false) 
      {
        // this.expanded.push(key);
      }
    }
    this.errorPanles = this.expanded;
    if (this.errorPanles.length > 0) {
      // Form will not submit and material panel with error will open
    } else {
      // do whatever you want in case no error
    }
  }

}


