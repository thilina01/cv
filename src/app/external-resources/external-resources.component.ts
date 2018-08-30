import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-resources',
  templateUrl: './external-resources.component.html',
  styleUrls: ['./external-resources.component.css']
})
export class ExternalResourcesComponent {
  @Input() externalResourcesData: any;
}
