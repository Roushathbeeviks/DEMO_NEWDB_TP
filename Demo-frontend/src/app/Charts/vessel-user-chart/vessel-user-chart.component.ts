import { Component, OnInit, Input } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-vessel-user-chart',
  templateUrl: './vessel-user-chart.component.html',
  styleUrls: ['./vessel-user-chart.component.css']
})
export class VesselUserChartComponent implements OnInit {
  chart:any
  chartOptions:any= {};
  
  @Input() data: any = [];
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart({
    chart: {
      type: 'pie',
      backgroundColor:'transparent',

    },
   
    title: {
      text: 'CHART TRIAL',
      align:'center'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [
      {
        name: 'User',
        type: 'pie',
        data:[1,2,3,4]
      },
    ]
    })


  }



}
