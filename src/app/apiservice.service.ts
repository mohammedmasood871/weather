import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) { 


  }

  public getweather(val:any){
    console.log(val, 'serv')
     return this.http.get( `http://api.weatherapi.com/v1/current.json?key=c01dbe3229c541d9878143703211112&q=${val}&aqi=yes`)
  }
}
