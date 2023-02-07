import { Component, OnInit,Inject } from '@angular/core';
import {  FormBuilder,
  FormControl,
  FormGroup,
  Validators,} from '@angular/forms';
import { IDropdownSettings} from 'ng-multiselect-dropdown'; 
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VesselService } from 'src/app/services/vessel.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-vessel-mapping',
  templateUrl: './vessel-mapping.component.html',
  styleUrls: ['./vessel-mapping.component.css']
})
export class VesselMappingComponent implements OnInit {
  VesselMappingForm:any=FormGroup
  dropdownList:any = [];
  selectedItems: any = [];
  dropdownSettings:IDropdownSettings={};
  id:any


 
  constructor(private vesselmapserv:VesselMappingService,  
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private vesselserv:VesselService,
     public dialogRef: MatDialogRef<VesselMappingComponent>,
     private route:ActivatedRoute) { }

  ngOnInit()  {
   
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

    this.vesselmapserv.GetVesselNameFromVessel().subscribe((res:any)=>
    {
      this.dropdownList=res
      console.log("dropdownList",this.dropdownList)
    })
    this.vesselmapserv.currentApprovalStageMessage.subscribe((msg) =>
    {
      // console.log("service via id",msg)
      this.id = msg
    });
    this.VesselMappingForm=this.formBuilder.group
    ({
      username:[],
      vessel_name:[this.selectedItems,Validators.required]
    })

    this.vesselserv.GetVesselNameByVesselUserMapping(this.data).subscribe((msg:any) =>
    {
     this.id= this.route.snapshot.paramMap.get('id')
     this.selectedItems=msg
      console.log("vesselmapping",this.selectedItems)
      // console.log("vesselmapping id ",this.data)
    })
  
  }
  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }
  onItemDeSelect(items:any){
    console.log("onDeSelect", items)
    console.log("Existing",items.id)
  
  }


delete(items:any)
{
  this.vesselmapserv.DeleteExistingVesselsfromMap(this.data).subscribe((msg:any)=>
  {
    console.log("delete")
  })
}




Save()
{
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
    this.vesselserv.openSnackBar("Saved Successfully","ok")
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