import { Component, OnInit } from '@angular/core';
import { VesselService } from 'src/app/services/vessel.service';
import {FormBuilder,FormControl,FormGroup,MinLengthValidator,} from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Chart } from 'angular-highcharts';
import { ActivatedRoute } from '@angular/router';
// import { Options } from 'highcharts/highcharts.src';
import { Options } from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
import * as Highcharts3d from "highcharts/highcharts-3d";

@Component({
  selector: 'app-monthly-chart',
  templateUrl: './monthly-chart.component.html',
  styleUrls: ['./monthly-chart.component.css']
})
export class MonthlyChartComponent implements OnInit {
count:any
jan:any=0
feb:any=0
mar:any=0
apr:any=0
may:any=0
jun:any=0
jul:any=0
aug:any=0
sep:any=0
oct:any=0
nov:any=0
dec:any=0
chartOptions:any= {};
logDetails:any=FormGroup;
id:any
chart:any

  constructor(private route:ActivatedRoute,private vesselserv:VesselService,private adminserv:AdminService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id')
    console.log("snapshot",this.id)
    console.log("count")
    this.id=localStorage.getItem('Id');
    console.log("ID",this.id)
    this.Counts().then(()=>
    {
  
      this.chart = new Chart({
          chart: {
              renderTo: 'container',
              type: 'column',
              options3d: {
                enabled: true,
                alpha: 10,
                beta: 30,
                depth: 250,
                viewDistance: 5,
                fitToPlot: false,
                frame: {
                  bottom: {
                    size: 1,
                    color: "rgba(0,0,0,0.02)"
                  },
                  back: {
                    size: 1,
                    color: "rgba(0,0,0,0.04)"
                  }
                }
              }
          },
          xAxis: {
              categories: ['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
          },
          yAxis: {
              title: { 
                  text:'Usage'
              }
          },
          tooltip: {
              headerFormat: '<b>{point.key}</b><br>',
              pointFormat: 'Usage: {point.y}'
          },
          // title: {
          //     text: 'Monthly',
          //     align: 'left'
          // },
          // subtitle: {
          //     text: 'Source: ' +
          //         '<a href="https://ofv.no/registreringsstatistikk"' +
          //         'target="_blank">OFV</a>',
          //     align: 'left'
          // },
          legend: {
              enabled: false
          },
      
      
          plotOptions: {
              column: {
                  depth: 25
              }
          },
          series: [{
            type: 'column',
              data: [this.jan,this.feb,this.mar,this.apr,this.may,this.jul,this.jul,this.aug,this.sep,this.oct,this.nov,this.dec],
              colorByPoint: true
          }]
      });
  
    })

  }
  Counts()
  {
      return new Promise((resolve,reject)=>
      {
          this.adminserv.GetLoginHistory(this.id).subscribe((res:any) => 
          {
              console.log("Response length",res.message.length)
              for(let i=0; i<=res.message.length-1; i++){
                  this.count=0
                  console.log("Response",res.message[i].login_date) 
                  let date=res.message[i].login_date
                  let month=date.substr(5, date.length-22)
                  console.log("Month",date.substr(5, date.length-22))
                  if(month=='01') 
                     { 
                      this.count++
                      this.jan=this.jan+this.count
                      console.log("Jan",this.jan)}
                   else if(month=='02')  {
                      this.count++
                      this.feb=this.feb+this.count
                      console.log("feb",this.count)
                   } 
                   else if(month=='03')  {
                      this.count++
                      this.mar=this.mar+this.count
                      console.log("marc",this.count)
                   } 
                   else if(month=='04')  {
                      this.count++
                      this.apr=this.apr+this.count
                      console.log("apr",this.count)
                   } 
                   else if(month=='05')  {
                      this.count++
                      this.may=this.may+this.count
                      console.log("may",this.count)
                   } 
                   else if(month=='06')  {
                      this.count++
                      this.jun=this.jun+this.count
                      console.log("jun",this.count)
                   } 
                   else if(month=='07')  {
                      this.count++
                      this.jul=this.jul+this.count
                      console.log("jul",this.count)
                   } 
                   else if(month=='08')  {
                      this.count++
                      this.aug=this.aug+this.count
                   } 
                   else if(month=='09')  {
                      this.count++
                      this.sep=this.sep+this.count
                   } 
                   else if(month=='10')  {
                      this.count++
                      this.oct=this.oct+this.count
                   } 
                   else if(month=='11')  {
                      this.count++
                      this.nov=this.nov+this.count
                   } 
                   else if(month=='12')  {
                      this.count++
                      this.dec=this.dec+this.count
                   } 
              } 
              // this.count=res.message.length
              // this.count.push(res.message.length)
              // console.log("counting",this.count)
              resolve(true);
          },
          (err)=>
          {
              reject(err);
          })     
        })
      
  }
  
  }