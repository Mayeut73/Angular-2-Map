import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarChartDemoComponent } from './chart/linebar/linebar.component';
import { DoughnutChartDemoComponent } from './chart/doughnut/doughnut.component';
import { NavBarComponent } from './navbar/navbar.component';
import { LineChartDemoComponent} from './chart/line/line.component';
import { HeaderComponent } from './header/header.component';

import {HttpModule} from "@angular/http";
import { MapComponent } from './map/map.component';
import {ChartsModule} from 'ng2-charts/ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BarChartDemoComponent,
    DoughnutChartDemoComponent,
    LineChartDemoComponent,
    NavBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
