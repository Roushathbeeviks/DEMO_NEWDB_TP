import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';

@Component({
  selector: 'app-voyage-form',
  templateUrl: './voyage-form.component.html',
  styleUrls: ['./voyage-form.component.css']
})
export class VoyageFormComponent implements OnInit {


  public date = new Date()
  voyageForm:any= FormGroup;
  StartPort:any
  DestinationPort:any
  vesselId:any;
  constructor(
    private voyageserv:VoyageplanService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private vesselserv:VesselService
    ) { }
  ngOnInit(): void {

    this.voyageForm=this.formBuilder.group
    ({
      startport_id:[''],
      destinationport_id:[''],
      cosp_lat:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      cosp_long:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      eosp_lat:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      eosp_long:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      cosp_time:['',[Validators.required]],
      displacement:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
      earliest_eta:['',[Validators.required]],
      just_eta:['',[Validators.required]],
      vessel_id:[]
    
    });

    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
  })
  this.vesselId=this.route.snapshot.paramMap.get('id')
  }
  save()
 {
  this.voyageForm.value.vessel_id=this.vesselId
  this.voyageserv.VoyageForm(this.voyageForm.value).subscribe((res:any)=>
  {
    if(res?.success)
    {
      this.vesselserv.openSnackBar("Saved Successfully","ok")
      this.router.navigate(['/voyagetable/',this.vesselId])
      
    }
  })
}
navigate()
  {
    this.router.navigate(['/voyagetable/',this.vesselId])
  }

// reloadPage(): void {
//   window.location.reload();
// }

}
