
import { Component, OnInit, Input,ApplicationRef } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { VesselService } from 'src/app/services/vessel.service';
import {FormBuilder,FormControl,FormGroup,MinLengthValidator, Validators,} from '@angular/forms';

import { AdminService } from 'src/app/services/admin.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  voyageForm:any= FormGroup;
  expanded :any= []
  errorPanles = ""
  formSubmitted = false
  StartPort:any
  DestinationPort:any
  vesselId:any=5;
  constructor(    private voyageserv:VoyageplanService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private vesselserv:VesselService, private appRef: ApplicationRef) { }
  ngOnInit() {
    this.voyageForm = this.formBuilder.group({
      voyagedetails: this.formBuilder.group({
      startport_id:[''],
      destinationport_id:[''],
      cosp_lat:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([.]+[0-9]+)*?$/)],],
      cosp_long:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([,.][0-9]+)*?$/)],],
      eosp_lat:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([,.][0-9]+)*?$/)],],
      eosp_long:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([,.][0-9]+)*?$/)],],
      }),
      waypoints :this.formBuilder.group({
        cosp_time:['',[Validators.required]],
        displacement:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
        earliest_eta:['',[Validators.required]],
        just_eta:['',[Validators.required]],
      })
    });
    
    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
  })
  // this.vesselId=this.route.snapshot.paramMap.get('id')
  }

  send(voyageForm:any) {
    this.formSubmitted = true
    this.expanded = []
    this.errorPanles = ""
    this.appRef.tick();
    for (var key in voyageForm.controls) {
      if (voyageForm.controls[key].valid === false) {
        this.expanded.push(key)
      }
    }      
    this.errorPanles = this.expanded  
    if(this.errorPanles.length>0){
      console.log("Error")
    }else{
      console.log("done")
      console.log("1",this.voyageForm.value)
      console.log("2",this.voyageForm.value.voyagedetails)
      console.log("3",this.voyageForm.value.waypoints)
      console.log("4",typeof (this.voyageForm.value) )
      Object.assign(this.voyageForm.value.voyagedetails, this.voyageForm.value.waypoints);
      console.log("5",typeof (this.voyageForm.value.voyagedetails) )
      console.log("6",this.voyageForm.value.voyagedetails)
//stuck on here (14-03-2023)
      this.voyageForm.value.voyagedetails.vessel_id=this.vesselId
      this.voyageserv.VoyageForm(this.voyageForm.value.voyagedetails).subscribe((res:any)=>
      {
        console.log(res,"donnn")
        if(res?.success)
        {
          this.vesselserv.openSnackBar("Saved Successfully","ok")
          this.router.navigate(['/voyagetable/',this.vesselId])
          console.log(res,"doneeee")
          
        }
      })
    }

    }
    
}

