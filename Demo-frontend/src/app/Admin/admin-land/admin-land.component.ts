import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';

@Component({
  selector: 'app-admin-land',
  templateUrl: './admin-land.component.html',
  styleUrls: ['./admin-land.component.css']
})
export class AdminLandComponent implements OnInit {
data: any;
  constructor(private route:Router,
    private vesselserv:VesselService) { }

  ngOnInit(): void {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      console.log(res);
      this.data=res
      console.log(this.data);
    })
  }
  navigate()
  {
    this.route.navigate(['/vessel']);
  }
}
