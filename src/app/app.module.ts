import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { ResponseComponent } from './response/response.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    ResponseComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
