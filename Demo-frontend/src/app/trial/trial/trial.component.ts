
import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { VesselService } from 'src/app/services/vessel.service';
import {FormBuilder,FormControl,FormGroup,MinLengthValidator,} from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
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

jan2:any=0
feb2:any=0
mar2:any=0
apr2:any=0
may2:any=0
jun2:any=0
jul2:any=0
aug2:any=0
sep2:any=0
oct2:any=0
nov2:any=0
dec2:any=0

chartOptions:any= {};
logDetails:any=FormGroup;
id:any
chart:any
charts:any
chart3:any
  @Input() data: any = [];
  constructor(
    private vesselserv:VesselService,
    private adminserv:AdminService
    ) { }

 ngOnInit() 
  {

    /*USER ID*/
  this.id=localStorage.getItem('Id');
  console.log("ID",this.id)

//CHART-1
  this.Counts().then(()=>
  {

    this.chart = new Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
        
            options3d: {
              enabled: true,
              alpha: 15,
              beta: 15,
              depth: 50,
              viewDistance: 5
          }
          
        },
        title: {
          text: 'Activity Chart 2023'
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
            data:[this.jan2,this.feb2,this.mar2,this.apr2,this.may2,this.jun2,this.jul2,this.aug2,this.sep2,this.oct2,this.nov2,this.dec2],
            colorByPoint: true
        }]
    });

  })


//CHART-2
  this.Counts().then(()=>
  {
  this.charts = new Chart({
    chart: {
      type: 'spline'
  },
  title: {
      text: 'Monthly Average 2022 vs 2023'
  },
  subtitle: {
      text: 'Monthly Average On the basis of User Login'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      accessibility: {
          description: 'Months of the year'
      }
  },
  yAxis: {
      title: {
          text: 'Count'
      },
      labels: {
          formatter: function () {
              return this.value + '';
          }
      }
  },
  tooltip: {
     
      shared: true
  },
  plotOptions: {
      spline: {
          marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
          }
      }
  },
  series: [{
    type: 'spline',
      name: '2022',
      marker:  {
          symbol: 'square'
      },
      data: [this.jan,this.feb,this.mar,this.apr,this.may,this.jun,this.jul,this.aug,this.sep,this.oct,this.nov,this.dec]

  }, {
    type: 'spline',
      name: '2023',
      marker: {
          symbol: 'diamond'
      },
      data: [this.jan2,this.feb2,this.mar2,this.apr2,this.may2,this.jun2,this.jul2,this.aug2,this.sep2,this.oct2,this.nov2,this.dec2]
  }]
    })
  })

//CHART-3
this.chart3 = new Chart({
chart: {
  plotBorderWidth: 0,
  plotShadow: false
},
title: {
  text: 'Vessel<br>User<br>Graph<br>',
  align: 'center',
  verticalAlign: 'middle',
  y: 60
},
tooltip: {
  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
accessibility: {
  point: {
      valueSuffix: '%'
  }
},
plotOptions: {
  pie: {
      dataLabels: {
          enabled: true,
          distance: -50,
          style: {
              fontWeight: 'bold',
              color: 'white'
          }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
  }
},
series: [{
  type: 'pie',
  name: 'Browser share',
  innerSize: '60%',
  data: [
    
      ['Vikrant',this.feb2],
      ['Upside',this.feb2],
      ['Tiyan', 5.52],
      ['Snowflake', 2.98],
      ['Gira', 1.90],
      ['Fly', 73.86],
      ['Direct', 11.97],
      ['Carry', 5.52],
      ['Agra', 2.98],
      {
          name: 'Other',
          y: 3.77,
          dataLabels: {
              enabled: false
          }
      }
  ]
}]
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
                let year=date.substr(0, 4)
                console.log("year",year)
                let month=date.substr(5, date.length-22)
                console.log("Month",date.substr(5, date.length-22))


              if(year=='2022')
              {

       
                if(month=='01') 
                   { 
                    this.count++
                    this.jan=this.jan+this.count
                    console.log("Jan",this.jan)}
                 else if(month=='02')  {
                    this.count++
                    this.feb=this.feb+this.count
                    console.log("febdddd",this.count)
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

              else{

                if(month=='01') 
                   { 
                    this.count++
                    this.jan2=this.jan2+this.count
                    console.log("Jan",this.jan2)}
                 else if(month=='02')  {
                    this.count++
                    this.feb2=this.feb2+this.count
                    console.log("feb",this.count)
                 } 
                 else if(month=='03')  {
                    this.count++
                    this.mar2=this.mar2+this.count
                    console.log("marc",this.count)
                 } 
                 else if(month=='04')  {
                    this.count++
                    this.apr2=this.apr2+this.count
                    console.log("apr",this.count)
                 } 
                 else if(month=='05')  {
                    this.count++
                    this.may2=this.may2+this.count
                    console.log("may",this.count)
                 } 
                 else if(month=='06')  {
                    this.count++
                    this.jun2=this.jun2+this.count
                    console.log("jun",this.count)
                 } 
                 else if(month=='07')  {
                    this.count++
                    this.jul2=this.jul2+this.count
                    console.log("jul",this.count)
                 } 
                 else if(month=='08')  {
                    this.count++
                    this.aug2=this.aug2+this.count
                 } 
                 else if(month=='09')  {
                    this.count++
                    this.sep2=this.sep2+this.count
                 } 
                 else if(month=='10')  {
                    this.count++
                    this.oct2=this.oct2+this.count
                 } 
                 else if(month=='11')  {
                    this.count++
                    this.nov2=this.nov2+this.count
                 } 
                 else if(month=='12')  {
                    this.count++
                    this.dec2=this.dec2+this.count
                 } 
                }

        
            }
            resolve(true);
        },
        (err)=>
        {
            reject(err);
        })     
      })
    
}

}