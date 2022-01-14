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
  dataSource:any 


  constructor( private route: ActivatedRoute, public service :ApiserviceService, public  http: HttpClient) {
    this.cityname =  this.route.snapshot.params['name']
  }
 

  ngOnInit() {
   
    this.getweath(this.cityname)
    
    
  }
 getweath(value :any){
  this.service.getweather(value).subscribe(res =>{
   this.dataSource = res
   console.log(res)
  }, err =>{
    console.log(err)
  })
  
 }

}
