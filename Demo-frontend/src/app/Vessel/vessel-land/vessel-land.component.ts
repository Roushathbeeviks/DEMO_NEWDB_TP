import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DeleteModalComponent } from 'src/app/modal/delete-modal/delete-modal.component';
import { VesselDeleteComponent } from 'src/app/modal/vessel-delete/vessel-delete.component';
import { VesselService } from 'src/app/services/vessel.service';
import { VesselEditComponent } from '../vessel-edit/vessel-edit.component';
import { VesselListComponent } from '../vessel-list/vessel-list.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-vessel-land',
  templateUrl: './vessel-land.component.html',
  styleUrls: ['./vessel-land.component.css']
})
export class VesselLandComponent implements OnInit {
fileName= 'VesselSheet.xlsx'
rows:any[]=[]
columnMode='standard';
columns = [];
ColumnMode = ColumnMode;
id:any
deleteid:any
data:any[]=[]
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

  exportexcel(): void
  {
    this.vesselserv.GetAllVesselForExcel().subscribe((data:any )=> {
      this.data=data;
      const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.data);
    // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.projectData.result_data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'VesselDetails');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
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
