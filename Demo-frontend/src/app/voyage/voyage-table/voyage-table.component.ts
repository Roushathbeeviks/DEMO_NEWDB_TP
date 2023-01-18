import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
@Component({
  selector: 'app-voyage-table',
  templateUrl: './voyage-table.component.html',
  styleUrls: ['./voyage-table.component.css']
})
export class VoyageTableComponent implements OnInit {
  rows:any
  columnMode='standard';
  columns = [];
  ColumnMode = ColumnMode;
  StartPort:any
  DestinationPort:any
  id:any
  datas:any
  vesselId:any
  stport:any
  dpPort:any
  constructor(
    private voyageserv:VoyageplanService,
    private vesselserv:VesselService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void 
  {

     this.id=this.route.snapshot.paramMap.get('id')
     console.log("Snapshot id",this.id)
     this.vesselserv.GetVesselByVesselId(this.id).subscribe((res:any)=>
     {
      this.datas=res
      console.log("res",res)
     })
    //  console.log("Snapshot id",this.id)
      this.voyageserv.GetVoyagePlanByVesselId(this.id).subscribe((res:any)=>
      {
        console.log("voyage of that vessel",res)
        // console.log(typeof res)
        this.rows=res.message
      })
  
      this.voyageserv.GetStartPort().subscribe((res)=>{
        console.log(res)
      })

}
AddVoyage(id:any)
{
  this.vesselId = id
  console.log("Vessel id",this.vesselId)
  this.router.navigate(['/voyageform/',this.vesselId]
  )
 
}
}
