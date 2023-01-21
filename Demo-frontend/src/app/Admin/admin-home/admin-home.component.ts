import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';
import { VesselService } from 'src/app/services/vessel.service';
// import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

// SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
data: any;
name:any;
term=''
 
  constructor(private vesselserv:VesselService,private vesselmapserv:VesselMappingService,private route:Router) { }

  ngOnInit(): void {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      // console.log(res);
      this.data=res
      // console.log(this.data);
    })

    this.vesselmapserv.GetVesselNameFromVessel().subscribe((res:any)=>
    {
      // console.log(res);
      this.name=res

    })
  }
  submitSearch(val:string){
    console.warn(val)
    this.route.navigate([`voyagetable/${val}`])
  }
  move(id:any)
  {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
    console.warn("this.")
    })  
  }
}
