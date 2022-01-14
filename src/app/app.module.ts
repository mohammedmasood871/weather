import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SelectorComponent } from './selector/selector.component';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './error/error.component'


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SelectorComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
