import { Component, OnInit,Inject } from '@angular/core';
import {  FormBuilder,
  FormControl,
  FormGroup,
  Validators,} from '@angular/forms';
import { IDropdownSettings} from 'ng-multiselect-dropdown'; 
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VesselService } from 'src/app/services/vessel.service';



@Component({
  selector: 'app-vessel-mapping',
  templateUrl: './vessel-mapping.component.html',
  styleUrls: ['./vessel-mapping.component.css']
})
export class VesselMappingComponent implements OnInit {
  VesselMappingForm:any=FormGroup
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings={};
  id:any

 
  constructor(private vesselmapserv:VesselMappingService,  private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,private vesselserv:VesselService, public dialogRef: MatDialogRef<VesselMappingComponent>){ }

  ngOnInit()  {
   
   console.log("kk",this.data)
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.vesselmapserv.GetVesselNameFromVessel().subscribe((res:any)=>
    {
      this.dropdownList=res
      console.log("dropdownList",this.dropdownList)
    })
    this.vesselmapserv.currentApprovalStageMessage.subscribe((msg) =>
    {
      console.log("service via id",msg)
      this.id = msg
    });
    this.VesselMappingForm=this.formBuilder.group
    ({
      username:[],
      vessel_name:['',Validators.required]
    })
    }
 
 Save()
  {
    // this.VesselMappingForm.markAllAsTouched();
    if(this.VesselMappingForm.value['vessel_name'])
    {
      
    this.VesselMappingForm.value['vessel_name'].forEach((e:any) => 
    {
      e['user_id'] = this.data
    });
    this.vesselmapserv.PostVesselMapping(this.VesselMappingForm.value['vessel_name']).subscribe((res:any)=>
    {
      console.log("Response",res)
      if(res?.message=="success")
      {
      this.vesselserv.openSnackBar("Successfully save","ok")
      this.dialogRef.close();
      }
      else
      {
        this.vesselserv.openSnackBar("Failed to save","error")
      }
    })
  }
  }

  

}
