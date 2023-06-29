import {Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {ServiceService} from "../service.service";
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() response: any;

  chart: any ;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const data = Object.values(this.response.probabilities);
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Libyan','Algerian','Mococcan', 'Tunisian'],
	       datasets: [
          {
            label: "Probability",
            data: data,
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
