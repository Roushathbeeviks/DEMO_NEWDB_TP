import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
id:any
data:any
  constructor(private route:Router
    ,private vesselserv:VesselService) { }

  ngOnInit(): void {
   
    this.id=localStorage.getItem('Id')
    console.log("local storage id",this.id)
    this.vesselserv.GetVesselById(this.id).subscribe((res)=>
    {
      this.data = res
      console.log("vessels of user",res)
    })
  }

}
