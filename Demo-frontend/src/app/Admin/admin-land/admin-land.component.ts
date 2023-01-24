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
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
stportId:any[]=[]
stPort:any[]=[]
dstPortId:any[]=[]
dstPort:any[]=[]
 value:any
  constructor(private route:Router,
    private vesselserv:VesselService,private voyageserv:VoyageplanService) { }

  ngOnInit(): void {
  

  }
  navigate()
  {
    this.route.navigate(['/vessel']);
  }
  // customOptions: OwlOptions = {
  //   loop: false,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 600,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 4
  //     },
  //     400: {
  //       items: 2
  //     },
  //     760: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
}
