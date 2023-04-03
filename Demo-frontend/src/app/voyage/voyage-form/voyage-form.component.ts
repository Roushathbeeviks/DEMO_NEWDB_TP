import { ApplicationRef, Component, OnInit } from '@angular/core';
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
  expanded :any= []
  errorPanles = ""
  formSubmitted = false
  constructor(
    private voyageserv:VoyageplanService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private vesselserv:VesselService,
    private appRef: ApplicationRef
    ) { }
  ngOnInit(): void {
    this.voyageForm=this.formBuilder.group
    ({
      voyagedetails: this.formBuilder.group({
        startport_id:[''],
        destinationport_id:[''],
        cosp_lat:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([.]+[0-9]+)*?$/)],],
        cosp_long:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([,.][0-9]+)*?$/)],],
        eosp_lat:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([,.][0-9]+)*?$/)],],
        eosp_long:['',[Validators.required, Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[0-9]+([,.][0-9]+)*?$/)],],
        vessel_id:[],
        }),
        waypoints :this.formBuilder.group({
          cosp_time:['',[Validators.required]],
          displacement:['',[Validators.required, Validators.minLength(2),Validators.pattern(/^[0-9]+([,.][0-9]+)?$/)],],
          earliest_eta:['',[Validators.required]],
          just_eta:['',[Validators.required]],
        }),
      additional:this.formBuilder.group({
        fuel_density:[],
        lower_calorific:[]
      })  
    });

    this.voyageserv.GetStartPort().subscribe(startport =>{
      this.StartPort = startport
    })
    this.voyageserv.GetDestinationPort().subscribe(endport =>{
      this.DestinationPort=endport
  })
  this.vesselId=this.route.snapshot.paramMap.get('id')
  }
  send(voyageForm:any) {
    console.log("clicked")
    this.formSubmitted = true
    this.expanded = []
    this.errorPanles = ""
    this.appRef.tick();
      for (var key in voyageForm.controls) {
        if (this.voyageForm.controls[key].valid === false) {
         console.log([key])
         this.expanded.push(key)
        }
      }
      this.errorPanles = this.expanded  
      if(this.errorPanles.length>0){
        console.log("Error")
      }else{
        Object.assign(this.voyageForm.value.voyagedetails, this.voyageForm.value.waypoints);
        this.voyageForm.value.voyagedetails.vessel_id=this.vesselId
        this.voyageserv.VoyageForm(this.voyageForm.value.voyagedetails).subscribe((res:any)=>
        {
          console.log("res",this.voyageForm.value.voyagedetails)
          if(res?.success)
          {
            this.vesselserv.openSnackBar("Saved Successfully","ok")
            this.router.navigate(['/voyagetable/',this.vesselId])
            console.log(res,"doneeee")
            
          }
        })
      }
    
}
navigate()
  {
    this.router.navigate(['/voyagetable/',this.vesselId])
  }

// reloadPage(): void {
//   window.location.reload();
// }

}
