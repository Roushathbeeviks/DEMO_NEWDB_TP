import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VoyageplanService } from 'src/app/services/voyageplan.service';

@Component({
  selector: 'app-voyage-delete',
  templateUrl: './voyage-delete.component.html',
  styleUrls: ['./voyage-delete.component.css']
})
export class VoyageDeleteComponent implements OnInit {
id:any
  constructor( private voyageserv:VoyageplanService,
     @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  reloadPage(): void {
    window.location.reload();
  }
  DeleteVoyage(id:any) 
  {
      this.voyageserv.DeletVoyage(this.data.data).subscribe((res:any)=>
       {
        console.log("this.data.data",this.data.data)
         console.log(res)
        this.reloadPage()
        
      })
     
 }
}
