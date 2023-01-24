import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit 
{
  trial:any[]=[]
id:any
vesselId:any
data:any
stportId:any[]=[]
  stPort:any[]=[]
  dstPortId:any[]=[]
  dstPort:any[]=[]
  constructor(private route:Router
    ,private vesselserv:VesselService,
    private voyageserv:VoyageplanService) { }
  veselCard:any[]=[]
  ngOnInit(): void 
  {
    this.id=localStorage.getItem('Id')
    console.log("local storage id",this.id)
    // this.voyageserv.updateApprovalMessage(this.id)
    this.vesselserv.GetVesselById(this.id).subscribe((res:any)=>
    {
      this.data = res
      this.vesselId=res
      console.log("vessels of user",res)
      this.veselCard=this.data
      
    })
    this.vesselserv.GetVesselId(this.id).subscribe((res:any)=>
    {
      // this.vesselId=res
      res.forEach((e:any) => 
      {
       this.vesselId= e['vessel_id'] 
       this.voyageserv. GetVoyagePlanByVesselId(this.vesselId).subscribe((res:any)=>{
        this.stportId=res.message[res.message.length-1].startport_id
        console.log("hihi")
       this.voyageserv.GetStartPortById(this.stportId).subscribe((res:any)=>{
        this.stPort.push(res[0])
        console.log("dfdf",this.stPort)
        
       })
  
       this.dstPortId=res.message[res.message.length-1].destinationport_id
       this.voyageserv.GeDestinationPortById(this.dstPortId).subscribe((res:any)=>{
        this.dstPort.push(res[0])
        console.log("kooi",this.dstPort)
       })
       
      
    })
       
      });
     
    })


  }
      

}
