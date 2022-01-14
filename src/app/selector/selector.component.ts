import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor(public routes: Router) {}

  ngOnInit() {}
  onSubmit(value: any) {
    this.routes.navigate(['/weather', value]);
  }
}
