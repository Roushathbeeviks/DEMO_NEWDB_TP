import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from 'src/app/services/vessel.service';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249', '&#8250'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  trial: any[] = [];
  a: boolean = true;
  id: any;
  vesselId: any;
  data: any;
  stportId: any[] = [];
  stPort: any[] = [];
  dstPortId: any[] = [];
  dstPort: any[] = [];
  constructor(
    private route: Router,
    private vesselserv: VesselService,
    private voyageserv: VoyageplanService,
    private adminserv:AdminService
  ) {}
  veselCard: any[] = [];
  ngOnInit(): void {
    this.id = localStorage.getItem('Id');
    console.log('local storage id', this.id);


    var data = {
      user_id:localStorage.getItem('Id'),
      login_date:new Date().toISOString()
      .replace('T', ' ')
      .replace('Z', '')
    };
  
    console.log("data login_date",new Date().toISOString()
    .replace('T', ' ')
    .replace('Z', ''));

this.adminserv.PostLoginHistory(data).subscribe((data:any)=>
{
  console.log('post data',data.message)
})


    this.vesselserv.GetVesselById(this.id).subscribe((res: any) => {
      console.log('kk', res.length);
      this.data = res;
      if(res.length > 0)
       {  
        for(let vessel of this.data){
        console.log('null', vessel);
        this.voyageserv.GetVoyagePlanByVesselId(vessel.id).subscribe((res: any) => {
          vessel['startportname'] = res.message.length
            ? res.message[res.message.length - 1].startportname
            : '';
          vessel['destinationportname'] = res.message.length
            ? res.message[res.message.length - 1].destinationportname
            : '';
          this.a = false;
        });
      }
        
       }
      else{
        this.route.navigate(['/novessel'])
    }
    });
  // }
  }
}
