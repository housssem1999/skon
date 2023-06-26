import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  chart: any ;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Libyan','Tunisian','Algerian ','Mococcan' ], 
	       datasets: [
          {
            label: "Probability",
            data: ['2','89', '5', '4'],
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:1
      }
      
    });
  }
}
