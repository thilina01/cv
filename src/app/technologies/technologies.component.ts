import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

   records = [
    {
      name:['HTML','CSS','fahhs'],
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
