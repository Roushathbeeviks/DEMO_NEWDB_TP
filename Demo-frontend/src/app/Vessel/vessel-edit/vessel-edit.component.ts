import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VesselService } from 'src/app/services/vessel.service';

@Component({
  selector: 'app-vessel-edit',
  templateUrl: './vessel-edit.component.html',
  styleUrls: ['./vessel-edit.component.css']
})
export class VesselEditComponent implements OnInit {
  EditVessel:any=FormGroup
  constructor(
    private vesselserv:VesselService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,

  ) { }

  ngOnInit(): void {
    this.vesselserv.GetVesselByVesselId(this.data.data).subscribe((res:any)=>
    {
      console.log(res);
      this.EditVessel.patchValue({
        name:res[0].name,
        imo_number:res[0].imo_number
      })
    })
    
this.EditVessel=this.formBuilder.group({
  name:[],
  imo_number:[]
})

  }
  check()
  {
    this.vesselserv.EditVessel(this.data.data,this.EditVessel.value).subscribe((res:any)=>
    {
      
    })
  }
}
