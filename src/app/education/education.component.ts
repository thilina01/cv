import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent  {
  @Input() educationData: any;
}

