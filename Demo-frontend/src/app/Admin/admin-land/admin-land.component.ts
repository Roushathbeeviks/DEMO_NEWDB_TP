import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
@Component({
  selector: 'app-admin-land',
  templateUrl: './admin-land.component.html',
  styleUrls: ['./admin-land.component.css']
})
export class AdminLandComponent implements OnInit {
data: any;
id:any[]=[];
vesselId:any
stportId:any[]=[]
  stPort:any[]=[]
  dstPortId:any[]=[]
  dstPort:any[]=[]
  value:any
  constructor(private route:Router,
    private vesselserv:VesselService,private voyageserv:VoyageplanService) { }

  ngOnInit(): void {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      console.log("kk",res);
      this.data=res
      this.vesselId=res
      
      // console.log(this.data);
    })
    this.vesselserv.GetAllVesselsIds().subscribe((res:any)=>{
       this.id=res
       console.log("jjjjj",this.id)

    })

    this.id.forEach((e:any)=>{
    this.value=e['this.id']
    console.log("jjjjj",this.value)
    this.vesselserv.GetVesselId(this.value).subscribe((res:any)=>
    {
      // this.vesselId=res
      res.forEach((e:any) => 
      {
      //  this.vesselId= e['this.id'] 
      //  console.log("huhu",this.id)
       
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

  })


  }
  navigate()
  {
    this.route.navigate(['/vessel']);
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
