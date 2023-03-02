import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.scss']
})
export class SixComponent implements OnInit {

  chartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  chartData: number[] = [10, 20, 30];

  myChart : Chart;
  constructor(){
    setInterval(() => {
      this.addDataPoint1();

    }, 5000); // update the value every 5 seconds
  }

  ngOnInit() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctxx = canvas.getContext('2d');
    this.myChart = new Chart(ctxx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Power Factor',
          data: [],
          borderColor: 'red',
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });
    this.addDataPoint1();
  }

  addDataPoint1() {
    const newDataPoint = Math.floor(Math.random() * 100);
    const currentDate = new Date().toLocaleTimeString();
    this.myChart.data.labels.push(currentDate);
    this.myChart.data.datasets[0].data.push(newDataPoint);
    this.myChart.update();
  }

}
