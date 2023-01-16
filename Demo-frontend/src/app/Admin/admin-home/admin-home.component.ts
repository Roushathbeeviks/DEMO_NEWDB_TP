import { Component, OnInit } from '@angular/core';
import { VesselService } from 'src/app/services/vessel.service';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
data: any;
 
  constructor(private vesselserv:VesselService) { }

  ngOnInit(): void {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      console.log(res);
      this.data=res
      // console.log(this.data);
    })
  }
}
