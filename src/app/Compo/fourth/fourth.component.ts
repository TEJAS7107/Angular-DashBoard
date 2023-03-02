import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {
  gaugeValue = 50;
  gaugeMin = 0;
  gaugeMax = 250;
  gaugeLabel = 'Volatge (v)';
  gaugeSize = 90;

  ////////////////////////////

  gaugeValue1 = 5;
  gaugeMin1 = 0;
  gaugeMax1 = 50;
  gaugeLabel1 ='Current (A)';
  gaugeSize1 = 90;
  ///////////////////////////////////
  gaugeValue2 = 1;
  gaugeMin2 = 0;
  gaugeMax2 = 10;
  gaugeLabel2 = 'Power (kW)';
  gaugeSize2 = 90;
  /////////////////////////////////////
  gaugeValue3 = 0.1;
  gaugeMin3 = 0;
  gaugeMax3 = 1;
  gaugeLabel3 = 'Power Factor (v)';
  gaugeSize3 = 90;
  ////////////////////////////////////////
  gaugeValue4 = 6;
  gaugeMin4 = 0;
  gaugeMax4 = 65;
  gaugeLabel4 = 'Frequency (Hz)';
  gaugeSize4 = 90;

  constructor() {
    setInterval(() => {
      this.updateGauge();
      this.updateGauge1();
      this.updateGauge2();
      this.updateGauge3();
      this.updateGauge4();
    }, 5000); // update the value every 5 seconds
  }

  updateGauge() {
    this.gaugeValue = Math.floor(Math.random() * (this.gaugeMax - this.gaugeMin + 1)) + this.gaugeMin;
  }

  updateGauge1() {
    this.gaugeValue1 = Math.floor(Math.random() * (this.gaugeMax1 - this.gaugeMin1 + 1)) + this.gaugeMin1;
  }

  updateGauge2() {
    this.gaugeValue2 = Math.floor(Math.random() * (this.gaugeMax2 - this.gaugeMin2 + 1)) + this.gaugeMin2;
  }
  updateGauge3() {
    this.gaugeValue3 = Math.floor(Math.random() * (this.gaugeMax3 - this.gaugeMin3 + 1)) + this.gaugeMin3;
  }
  updateGauge4() {
    this.gaugeValue4 = Math.floor(Math.random() * (this.gaugeMax4 - this.gaugeMin4 + 1)) + this.gaugeMin4;
  }

}
