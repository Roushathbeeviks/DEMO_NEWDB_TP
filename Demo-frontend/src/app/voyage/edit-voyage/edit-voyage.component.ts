import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(private voyageserv:VoyageplanService,
    private formBuilder: FormBuilder,
    private vesselserv:VesselService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.EditVoyageForm=this.formBuilder.group
    ({
      startport_id:[''],
      destinationport_id:[''],
      cosp_lat:[],
      cosp_long:[],
      eosp_lat:[],
      eosp_long:[],
      cosp_time:[''],
      displacement:[],
      earliest_eta:[''],
      just_eta:[''],
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
    cosp_time:res[0].cosp_time,
    displacement:res[0].displacement,
    earliest_eta:res[0].earliest_eta,
    just_eta:res[0].just_eta,
    vessel_id:res[0].vessel_id
 
  })
  
})
  }
  save()
  {
  // console.log("Saving...")
  this.voyageserv.EditVoyage(this.data, this.EditVoyageForm.value).subscribe((result:any)=>
  {
    console.log("ffff",this.data)
    console.log(result)
  })
 }
 

}
