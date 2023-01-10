import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VoyageplanService } from 'src/app/services/voyageplan.service';

@Component({
  selector: 'app-voyage-form',
  templateUrl: './voyage-form.component.html',
  styleUrls: ['./voyage-form.component.css']
})
export class VoyageFormComponent implements OnInit {
  voyageForm:any= FormGroup;
  StartPort:any
  DestinationPort:any
  constructor(private voyageserv:VoyageplanService) { }
  ngOnInit(): void {
    
    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
      // console.log("startport",this.StartPort)
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
      // console.log("endport",this.DestinationPort)
  })
  }
  save()
{
  this.voyageserv.VoyageForm(this.voyageForm.value).subscribe((res:any)=>
  {
    console.log("res")
  })
}

}
