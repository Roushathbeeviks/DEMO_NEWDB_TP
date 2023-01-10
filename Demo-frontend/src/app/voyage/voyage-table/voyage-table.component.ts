import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
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
  constructor(private voyageserv:VoyageplanService,private route:ActivatedRoute) { }

  ngOnInit(): void 
  {

     this.id=this.route.snapshot.paramMap.get('id')
    //  console.log("Snapshot id",this.id)
      this.voyageserv.GetVoyagePlanByVesselId(this.id).subscribe((res:any)=>
      {
        console.log("voyage of that vessel",res)
        // console.log(typeof res)
        this.rows=res.message
      })




  //   this.voyageserv.GetStartPort().subscribe(startport =>{
  //     this.StartPort = startport
  //     // console.log(port)
  //   })
  //   this.voyageserv.GetDestinationPort().subscribe(endport =>{
  //     this.DestinationPort=endport
  //     // console.log("endport",endport)
  // })
  // this.voyageserv.GetVoyagePlan().subscribe((data) =>{
  //   console.log("voyagedetails",data)
  // })
}



}
