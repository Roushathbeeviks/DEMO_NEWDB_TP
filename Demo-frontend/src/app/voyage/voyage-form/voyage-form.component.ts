import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VoyageplanService } from 'src/app/services/voyageplan.service';

@Component({
  selector: 'app-voyage-form',
  templateUrl: './voyage-form.component.html',
  styleUrls: ['./voyage-form.component.css']
})
export class VoyageFormComponent implements OnInit {
  voyageForm:any= FormGroup;
  StartPort:any
  DestinationPort:any
  vesselId:any;
  constructor(private voyageserv:VoyageplanService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    
    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
      // console.log("startport",this.StartPort)
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
      // console.log("endport",this.DestinationPort)
  })
  this.vesselId=this.route.snapshot.paramMap.get('id')
  // console.log("id",this.vesselId)
  }
  save()
 {
  this.voyageserv.VoyageForm(this.voyageForm.value,this.vesselId).subscribe((res:any)=>
  {
    console.log("res")
  })
}

}
