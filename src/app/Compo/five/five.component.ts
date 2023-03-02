import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements OnInit{

  chartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  chartData: number[] = [10, 20, 30];


  chartLabels2: string[] = ['Label 1', 'Label 2', 'Label 3'];
  chartData2: number[] = [10, 20, 30];

  myChart : Chart;

  myChart2 :Chart;
  constructor(){
    setInterval(() => {
      this.addDataPoint();
      this.addDataPoint2();

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
          label: 'Power(kW)',
          data: [],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });


    const canva = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canva.getContext('2d');
    this.myChart2 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Power(kW)',
          data: [],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });







    this.addDataPoint();
    this.addDataPoint2();
  }

  addDataPoint() {
    const newDataPoint = Math.floor(Math.random() * 100);
    const currentDate = new Date().toLocaleTimeString();
    this.myChart.data.labels.push(currentDate);
    this.myChart.data.datasets[0].data.push(newDataPoint);
    this.myChart.update();
  }

  addDataPoint2() {
    const newDataPoint = Math.floor(Math.random() * 100);
    const currentDate = new Date().toLocaleTimeString();
    this.myChart2.data.labels.push(currentDate);
    this.myChart2.data.datasets[0].data.push(newDataPoint);
    this.myChart2.update();
  }

}
