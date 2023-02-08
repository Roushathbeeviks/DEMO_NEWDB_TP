import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
@Component({
  selector: 'app-edit-voyage',
  templateUrl: './edit-voyage.component.html',
  styleUrls: ['./edit-voyage.component.css']
})
export class EditVoyageComponent implements OnInit {
  EditVoyageForm:any= FormGroup
 StartPort:any
 DestinationPort:any
 submitted:boolean=false;
  constructor(private voyageserv:VoyageplanService,
    private formBuilder: FormBuilder,
    private vesselserv:VesselService,
    private route:Router,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.EditVoyageForm=this.formBuilder.group
    ({
      startport_id:[''],
      destinationport_id:[''],
      cosp_lat:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      cosp_long:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      eosp_lat:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      eosp_long:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      cosp_time:['',[Validators.required]],
      displacement:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      earliest_eta:['',[Validators.required]],
      just_eta:['',[Validators.required]],
      vessel_id:[]
    
    });

    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
  })

this.voyageserv.GetVoyagePlanByVoyageId(this.data).subscribe((res:any) =>{
  console.log("voyage for voyageid",res)
  this.EditVoyageForm.patchValue({
    startport_id:res[0].startport_id,
    destinationport_id:res[0].destinationport_id,
    cosp_lat:res[0].cosp_lat,
    cosp_long:res[0].cosp_long,
    eosp_lat:res[0].eosp_lat,
    eosp_long:res[0].eosp_long,
    cosp_time:new Date(res[0].cosp_time).toISOString().replace('Z', ''),
    displacement:res[0].displacement,
    earliest_eta:new Date(res[0].earliest_eta).toISOString().replace('Z', ''),
    just_eta:new Date(res[0].just_eta).toISOString().replace('Z',''),
    vessel_id:res[0].vessel_id
 
  })
  
})
  }
  save()
  {

    if(!this.EditVoyageForm.valid) {
      this.EditVoyageForm.markAllAsTouched();
    }else{
    this.submitted = true;
  // console.log("Saving...")
  this.voyageserv.EditVoyage(this.data, this.EditVoyageForm.value).subscribe((result:any)=>
  {
    
    console.log("result",result)
    this.reloadPage()
    this.submitted = false;
  })
}
 }

 reloadPage(): void {
    window.location.reload();
  }


}
