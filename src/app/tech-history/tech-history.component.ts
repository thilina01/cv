import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-history',
  templateUrl: './tech-history.component.html',
  styleUrls: ['./tech-history.component.css']
})
export class TechHistoryComponent {
  @Input() techHistoryData: any;
}
