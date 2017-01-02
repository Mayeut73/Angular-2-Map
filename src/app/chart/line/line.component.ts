import { Component } from '@angular/core';

// webpack html imports
let template = require('./line.component.html');

@Component({
  selector: 'line-chart-demo',
  template
})
export class LineChartDemoComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '0 à 3 ans'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: '3 à 5 ans'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: '5 à 10 ans'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // red
      backgroundColor: 'rgba(239,66,66,0.2)',
      borderColor: 'rgba(239,66,66,1)',
      pointBackgroundColor: 'rgba(239,66,66,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(239,66,66,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(66,239,66,0.2)',
      borderColor: 'rgba(66,239,66,1)',
      pointBackgroundColor: 'rgba(66,239,66,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(66,239,66,1)'
    },
    { // yellow
      backgroundColor: 'rgba(239,239,66,0.2)',
      borderColor: 'rgba(239,239,66,1)',
      pointBackgroundColor: 'rgba(239,239,66,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(239,239,66,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}