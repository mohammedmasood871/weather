import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityname: any;
  // data 
  weather1Data:any;  
  cityname1:string ='chennai'
  // data 2
  weather2Data:any;  
  weather3Data:any;  
  weather4Data:any;  
  weather5Data:any;  
  weather6Data:any;  
  weather7Data:any;  
  weather8Data:any;  
  weather9Data:any;  


  // weather info card detail show
  weather1:boolean = false;
  weather2:boolean = false;
  weather3:boolean = false;
  weather4:boolean = false;
  weather5:boolean = false;
  weather6:boolean = false;
  weather7:boolean = false;
  weather8:boolean = false;
  weather9:boolean = false;

  //showing input 
   showInput2:boolean = false
   showInput3:boolean = false
   showInput4:boolean = false
   showInput5:boolean = false
   showInput6:boolean = false
   showInput7:boolean = false
   showInput8:boolean = false
   showInput9:boolean = false



   //weather Image
   weatherImage1:any
   weatherImage2:any
   weatherImage3:any
   weatherImage4:any
   weatherImage5:any
   weatherImage6:any
   weatherImage7:any
   weatherImage8:any
   weatherImage9:any

  //error Message 

  weatherErro1:any =''
  weatherErro2:any = ''
  weatherErro3:any = ''
  weatherErro4:any = ''
  weatherErro5:any = ''
  weatherErro6:any = ''
  weatherErro7:any = ''
  weatherErro8:any = ''
  weatherErro9:any = ''



  constructor( private route: ActivatedRoute, public service :ApiserviceService, public  http: HttpClient) {
    this.cityname =  this.route.snapshot.params['name']
  }
 

  ngOnInit() {   
    this.getweath(this.cityname1)
    
    
  }
 
 

  // weather api call for grid
 getweath(value :any){
  this.service.getweather(value).subscribe((res:any) =>{
   this.weather1Data = res
   this.weather1 = true
   this.weatherImage1 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`;
   console.log(res)
  }, err =>{
    console.log(err)
  })
  
 }

//  get weather 2  data
showButton2(){
  this.showInput2 = true
  
}
getweather2(value :any){
  
  this.service.getweather2(value).subscribe((res:any) =>{
   
      this.weather2Data = res
       this.weather2 = true
       this.weatherImage2 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
   
  }, err =>{
          this.weatherErro2 = err.error.message
    console.log(err.error.message)
  })
  
 }

 //  get weather 3 data
showButton3(){
  this.showInput3 = true
  
}
getweather3(value :any){
  this.service.getweather3(value).subscribe((res:any) =>{
  
      this.weather3Data = res
       this.weather3 = true
       this.weatherImage3 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
   
  }, err =>{
this.weatherErro3 = err.error.message
    console.log(err.error.message)  })
  
 }

  //  get weather 4 data
showButton4(){
  this.showInput4 = true
  
}
getweather4(value :any){
  console.log()
  this.service.getweather4(value).subscribe((res:any) =>{
  
      this.weather4Data = res
       this.weather4 = true
       this.weatherImage4 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
  }, err =>{
      this.weatherErro4 = err.error.message
    console.log(err.error.message)
  })
  
 }

   //  get weather 5 data
showButton5(){
  this.showInput5 = true
  
}
getweather5(value :any){
  console.log()
  this.service.getweather5(value).subscribe((res:any) =>{
  
      this.weather5Data = res
       this.weather5 = true
       this.weatherImage5 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
  }, err =>{
   this.weatherErro5 = err.error.message
    console.log(err.error.message)
  })
  
 }
   //  get weather 6 data
showButton6(){
  this.showInput6 = true
  
}
getweather6(value :any){
  console.log()
  this.service.getweather6(value).subscribe((res:any) =>{
 
      this.weather6Data = res
       this.weather6 = true
       this.weatherImage6 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
  }, err =>{
    this.weatherErro6 = err.error.message
    console.log(err.error.message)
  })
  
 }

    //  get weather 7 data
showButton7(){
  this.showInput7 = true
  
}
getweather7(value :any){
  console.log()
  this.service.getweather7(value).subscribe((res:any) =>{
  
      this.weather7Data = res
       this.weather7 = true
       this.weatherImage7 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
  }, err =>{
this.weatherErro7 = err.error.message
    console.log(err.error.message)  })
  
 }

    //  get weather 8 data
showButton8(){
  this.showInput8 = true
  
}
getweather8(value :any){
  console.log()
  this.service.getweather8(value).subscribe((res:any) =>{

      this.weather8Data = res
       this.weather8 = true
       this.weatherImage8 = `http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`
    
  }, err =>{
  this.weatherErro8 = err.error.message
    console.log(err.error.message)
  })
  
 }
     //  get weather 8 data
showButton9(){
  this.showInput9 = true
  
}
getweather9(value :any){
  console.log()
  this.service.getweather9(value).subscribe((res:any) =>{
   this.weather9Data = res
   this.weather9 = true
   console.log(res)
  }, err =>{
   this.weatherErro9 = err.error.message
    console.log(err.error.message)
  })
  
 }


}
