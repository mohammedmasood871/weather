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
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather2(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather3(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather4(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather5(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather6(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather7(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather8(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
  public getweather9(val:any){
    console.log(val, 'serv')
     return this.http.get( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=09bf99e9be04df8182f33334b1025711`)
  }
}
