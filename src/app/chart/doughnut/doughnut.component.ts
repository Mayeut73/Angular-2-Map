import { Component } from '@angular/core';

// webpack html imports
let template = require('./doughnut.component.html');

@Component({
  selector: 'doughnut-chart-demo',
  template: template
})
export class DoughnutChartDemoComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Catégorie A', 'Catégorie B', 'Catégorie C', 'Catégorie D'];
  public doughnutChartData:number[] = [350, 400, 100, 50];
  public doughnutChartType:string = 'doughnut';
  public doughnutClass:string = "resize-doughnut";

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}