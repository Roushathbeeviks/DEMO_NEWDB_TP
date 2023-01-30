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
 
data: any;
id:any[]=[];
vesselId:any

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
 
      let index = 0;
      this.data.forEach((e:any) => 
          {
            this.voyageserv. GetVoyagePlanByVesselId(e.id).subscribe((res:any)=>{
              this.data[index]['startportname'] = res.message.length ? res.message[res.message.length-1].startportname : '';
              this.data[index]['destinationportname'] = res.message.length ? res.message[res.message.length-1].destinationportname : '';
              index++;  
          })
    
    })
  })
  
  }
  reload()
  {
    window.location.reload();
  }
  navigate()
  {
    this.route.navigate(['/vessel']);
  }
 
}
