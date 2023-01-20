import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
@Component({
  selector: 'app-edit-voyage',
  templateUrl: './edit-voyage.component.html',
  styleUrls: ['./edit-voyage.component.css']
})
export class EditVoyageComponent implements OnInit {
 voyageForm:any= FormGroup
 StartPort:any
 DestinationPort:any
  constructor(private voyageserv:VoyageplanService,
    private formBuilder: FormBuilder,
    private vesselserv:VesselService) { }

  ngOnInit(): void {
    this.voyageForm=this.formBuilder.group
    ({
      startport_id:[''],
      destinationport_id:[''],
      cosp_lat:[],
      cosp_long:[],
      eosp_lat:[],
      eosp_long:[],
      cosp_time:[],
      displacement:[],
      earliest_eta:[],
      just_eta:[],
      vessel_id:[]
    
    });

    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
  })
  }

}
