import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-non-related',
  templateUrl: './non-related.component.html',
  styleUrls: ['./non-related.component.css']
})
export class NonRelatedComponent {

  @Input() nonRelatedData: any; 
}
