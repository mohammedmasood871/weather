import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SelectorComponent } from './selector/selector.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', component: SelectorComponent },
  { path: 'weather/:name', component: WeatherComponent },
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
