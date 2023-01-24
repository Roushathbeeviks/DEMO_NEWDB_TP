import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
@Component({
  selector: 'app-admin-land',
  templateUrl: './admin-land.component.html',
  styleUrls: ['./admin-land.component.css']
})

export class AdminLandComponent implements OnInit {
data: any;
id:any[]=[];
vesselId:any

  stPort:any[]=[]
  dstPortId:any[]=[]
  dstPort:any[]=[]
  value:any
  constructor(private route:Router,
    private vesselserv:VesselService,private voyageserv:VoyageplanService) { }

  ngOnInit(): void {
    this.vesselserv.GetAllVessel().subscribe((res:any)=>
    {
      console.log("kk",res);
      this.data=res
 
      let index = 0;
      this.data.forEach((e:any) => 
          {
            this.voyageserv. GetVoyagePlanByVesselId(e.id).subscribe((res:any)=>{
              this.data[index]['startportname'] = res.message.length ? res.message[res.message.length-1].startportname : '';
              this.data[index]['destinationportname'] = res.message.length ? res.message[res.message.length-1].destinationportname : '';
              index++;  
              /*let stportId=  res.message.length ? res.message[res.message.length-1].startport_id : '';
              
              console.log("hihi",stportId)
              if(stportId !== '') {
                this.voyageserv.GetStartPortById(stportId).subscribe((res:any)=>{
                  //this.stPort.push(res[0])
                  //console.log("dfdf",this.stPort)
                  this.data[index]['startport'] = res[0].name;
                  this.data[index]['destinationportname'] = res[0].name;
                  index++;  
                 })
              } */  
              // let dstPortId=  res.message.length ? res.message[res.message.length-1].destinationport_id : '';
              // console.log("jj",dstPortId)
              // if(dstPortId !== '') {
              //   this.voyageserv.GeDestinationPortById(dstPortId).subscribe((res:any)=>{
           
              //     this.data[index]['dstport'] = res[0].name;
                  
              //    })
            
              // }    
                  
          })
          
    
    })
  })
    /*this.vesselserv.GetAllVesselsIds().subscribe((res:any)=>{
       this.id=res
       console.log("jjjjj",this.id)
       this.id.forEach((e:any)=>{
        this.value=e['this.id']
        console.log("jjjjj",this.value)
        this.vesselserv.GetVesselId(e.id).subscribe((res:any)=>
        {
          // this.vesselId=res
          res.forEach((e:any) => 
          {
          //  this.vesselId= e['this.id'] 
          //  console.log("huhu",this.id)
           console.log('e',e)
           this.voyageserv. GetVoyagePlanByVesselId(e.id).subscribe((resp:any)=>{
            this.stportId=resp.message[resp.message.length-1].startport_id
            console.log("hihi")
           this.voyageserv.GetStartPortById(this.stportId).subscribe((res:any)=>{
            this.stPort.push(res[0])
            console.log("dfdf",this.stPort)
            
           })
    
      
           this.dstPortId=res.message[res.message.length-1].destinationport_id
           this.voyageserv.GeDestinationPortById(this.dstPortId).subscribe((res:any)=>{
            this.dstPort.push(res[0])
            console.log("kooi",this.dstPort)
           })
           
          
        })
           
          });
         
        })
    
      })

    })*/




  }
  navigate()
  {
    this.route.navigate(['/vessel']);
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
data: any;
id:any[]=[];
vesselId:any
stportId:any[]=[]
stPort:any[]=[]
dstPortId:any[]=[]
dstPort:any[]=[]
 value:any
  constructor(private route:Router,
    private vesselserv:VesselService,private voyageserv:VoyageplanService) { }

  ngOnInit(): void {
  

  }
  navigate()
  {
    this.route.navigate(['/vessel']);
  }
  // customOptions: OwlOptions = {
  //   loop: false,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 600,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 4
  //     },
  //     400: {
  //       items: 2
  //     },
  //     760: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
}
