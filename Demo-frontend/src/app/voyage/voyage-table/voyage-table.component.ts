import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { max } from 'rxjs';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
import { MatDialog } from '@angular/material/dialog';
import { EditVoyageComponent } from '../edit-voyage/edit-voyage.component';
import { VoyageDeleteComponent } from 'src/app/modal/voyage-delete/voyage-delete.component';

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
  Id:any
  datas:any
  vesselId:any
  // stportId:any
  stPort:any
  // dstPortId:any[]=[]
  dstPort:any
  voyageId:any
  constructor(
    private voyageserv:VoyageplanService,
    private vesselserv:VesselService,
    private route:ActivatedRoute,
    private router:Router,
    private dialog:MatDialog) { }

  ngOnInit(): void 
  {

     this.id=this.route.snapshot.paramMap.get('id')
     console.log("Snapshot id",this.id)
     this.vesselserv.GetVesselByVesselId(this.id).subscribe((res:any)=>
     {
      this.datas=res
      // console.log("res",res)
     })
    //  console.log("Snapshot id",this.id)
      this.voyageserv.GetVoyagePlanByVesselId(this.id).subscribe((res:any)=>
      {
        // console.log("voyage of that vessel",res)
        // console.log("hhhhhhhhh",res.message[0].cosp_time.replace('T', '').replace('Z',''))
        this.rows=res.message
        // 
        
      })
  
      this.voyageserv.GetVoyagePlanByVesselId(this.id).subscribe((res:any)=>{
      let stportId=res.message.length && res.message[res.message.length-1].startport_id ? res.message[res.message.length-1].startport_id : ''
        
        console.log("res",res)
        console.log("port",stportId)
        if(stportId != ''){
       this.voyageserv.GetStartPortById(stportId).subscribe((res:any)=>{
        this.stPort= res
        console.log("dfdf",this.stPort)
       })
      }
       let dstPortId=res.message.length && res.message[res.message.length-1].destinationport_id ? res.message[res.message.length-1].destinationport_id:''
       if(dstPortId != ''){
        this.voyageserv.GeDestinationPortById(dstPortId).subscribe((res:any)=>{
        this.dstPort=res
       })
      }
      })

}
AddVoyage(id:any)
{
  this.vesselId = id
  // console.log("Vessel id",this.vesselId)
  this.router.navigate(['/voyageform/',this.vesselId]
  )
 
}
EditVoyage(id:any)
{
  this.voyageId = id
  // console.log("hifi",this.voyageId)
  this.dialog.open(EditVoyageComponent,
    {
      data:this.voyageId,
      // height:"60%",
      // width:"80%",
    })
}
DeleteVoyage(id:any)
{
  this.Id = id
  // console.log("hifi",this.Id)
  this.dialog.open(VoyageDeleteComponent,
    {
      data: {
        data: this.Id,
      },
    })
}

}
