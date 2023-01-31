import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit 
{

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249', '&#8250'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  trial:any[]=[]
  null:any=0;
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
      console.log("kk",res);
      this.data = res
      let index = 0;
      this.data.forEach((e:any) => 
      {
        this.voyageserv. GetVoyagePlanByVesselId(e.id).subscribe((res:any)=>{
          this.data[index]['startportname'] = res.message.length ? res.message[res.message.length-1].startportname : '';
          this.data[index]['destinationportname'] = res.message.length ? res.message[res.message.length-1].destinationportname : '';
          index++;  
          /*let stportId=  res.message.length ? res.message[res.message.length-1].startport_id : '';
          
          console.log("hihi",stportId)
          if(stportId !== '') {
            this.voyageserv.GetStartPortById(stportId).subscribe((res:any)=>{
              //this.stPort.push(res[0])
              //console.log("dfdf",this.stPort)
              this.data[index]['startport'] = res[0].name;
              this.data[index]['destinationportname'] = res[0].name;
              index++;  
             })
          } */  
          // let dstPortId=  res.message.length ? res.message[res.message.length-1].destinationport_id : '';
          // console.log("jj",dstPortId)
          // if(dstPortId !== '') {
          //   this.voyageserv.GeDestinationPortById(dstPortId).subscribe((res:any)=>{
       
          //     this.data[index]['dstport'] = res[0].name;
              
          //    })
        
          // }    
              
      })
      

})




      // this.vesselId=res
      // console.log("vessels of user",res)
      // this.veselCard=this.data
      
    })
    // this.vesselserv.GetVesselId(this.id).subscribe((res:any)=>
    // {
    //   // this.vesselId=res
    //   res.forEach((e:any) => 
    //   {
    //    this.vesselId= e['vessel_id'] 
    //    this.voyageserv. GetVoyagePlanByVesselId(this.vesselId).subscribe((res:any)=>{
    //     this.stportId=res.message[res.message.length-1].startport_id
    //     console.log("hihi")
    //    this.voyageserv.GetStartPortById(this.stportId).subscribe((res:any)=>{
    //     this.stPort.push(res[0])
    //     console.log("dfdf",this.stPort)
        
    //    })
  
    //    this.dstPortId=res.message[res.message.length-1].destinationport_id
    //    this.voyageserv.GeDestinationPortById(this.dstPortId).subscribe((res:any)=>{
    //     this.dstPort.push(res[0])
    //     console.log("kooi",this.dstPort)
    //    })
       
      
    // })
       
    //   });
     
    // })


  }
}
