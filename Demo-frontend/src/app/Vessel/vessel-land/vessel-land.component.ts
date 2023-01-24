import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DeleteModalComponent } from 'src/app/modal/delete-modal/delete-modal.component';
import { VesselDeleteComponent } from 'src/app/modal/vessel-delete/vessel-delete.component';
import { VesselService } from 'src/app/services/vessel.service';
import { VesselEditComponent } from '../vessel-edit/vessel-edit.component';
import { VesselListComponent } from '../vessel-list/vessel-list.component';

@Component({
  selector: 'app-vessel-land',
  templateUrl: './vessel-land.component.html',
  styleUrls: ['./vessel-land.component.css']
})
export class VesselLandComponent implements OnInit {
rows:any[]=[]
columnMode='standard';
columns = [];
ColumnMode = ColumnMode;
id:any
deleteid:any
  constructor(private dialog:MatDialog,private vesselserv:VesselService) { }

  ngOnInit(): void 
  {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      console.log(res)
      this.rows = res;
    
    })  
  }

  VesselForm()
  {
    this.dialog.open(VesselListComponent,{})
  }
  EditVessel(id:any)
  {
    this.id=id;
    console.log("VesselId for Editing",this.id)
    this.dialog.open(VesselEditComponent,
      {
        data:{data:this.id},
      })

  }
  DeleteDialog(id:any)
  {
    this.deleteid=id
    console.log(this.deleteid)
    this.dialog.open(VesselDeleteComponent,{
      data: {
        data: this.deleteid,
      },
    })
  }

//   delete($event:any,id:any) 
//   {
//     this.id=id
//     console.log( this.id )
//      if(confirm("Do you want to delete this recipe"))
//      {
//        this.vesselserv.DeleteVessel(this.id).subscribe((res)=>
//        {
//          console.log(res)
//       //  this.toastr.success("Deleted successfully","sucees")
//        this.ngOnInit();
//       })
     
//    }
//  }
}
