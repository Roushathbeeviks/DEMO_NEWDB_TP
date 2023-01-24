import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VesselService } from 'src/app/services/vessel.service';

@Component({
  selector: 'app-vessel-delete',
  templateUrl: './vessel-delete.component.html',
  styleUrls: ['./vessel-delete.component.css']
})
export class VesselDeleteComponent implements OnInit {
id:any
  constructor(private vesselserv:VesselService,
     @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
  }

  reloadPage(): void {
    window.location.reload();
  }
  DeleteVessel(id:any) 
  {

      this.id=id;
      this.vesselserv.DeleteVessel(this.data.data).subscribe((res:any)=>
       {
        // console.log("this.data.data",this.data.data)
         console.log(res)
        this.reloadPage()
        
      })
     
 }
}
