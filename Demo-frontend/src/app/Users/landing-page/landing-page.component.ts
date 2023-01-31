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
  a:boolean=true;
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
    
    this.vesselserv.GetVesselById(this.id).subscribe((res:any)=>
    {
      console.log("kk",res);
      this.data = res
      let index = 0;
      
      this.data.forEach((e:any) => 
      {  
      
        console.log("null",this.a)
        this.voyageserv. GetVoyagePlanByVesselId(e.id).subscribe((res:any)=>{
          this.data[index]['startportname'] = res.message.length ? res.message[res.message.length-1].startportname : '';
          this.data[index]['destinationportname'] = res.message.length ? res.message[res.message.length-1].destinationportname : '';
          index++;  
          this.a=false
      })
      

})

      
    })

  }
}
