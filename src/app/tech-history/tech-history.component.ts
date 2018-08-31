import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
declare var AmCharts: any;

@Component({
  selector: 'app-tech-history',
  templateUrl: './tech-history.component.html',
  styleUrls: ['./tech-history.component.css']
})
export class TechHistoryComponent {
  @Input() techHistoryData: any;
  
  chart: any;
  chartConfig = {
    "type": "gantt",
    "marginLeft": 10,
    "period": "DD",
    "dataDateFormat": "YYYY-MM-DD",
    "columnWidth": 0.5,
    "valueAxis": {
      "type": "date"
    }, "categoryAxis": {
      "gridPosition": "start",
      "position": "right"
    },
    "brightnessStep": 7,
    "graph": {
      "lineAlpha": 1,
      "lineColor": "#fff",
      "fillAlphas": 0.85,
      "balloonText": "<b>[[category]]</b>:<br />[[open]] -- [[value]]"
    },
    "rotate": true,
    "categoryField": "category",
    "segmentsField": "segments",
    "colorField": "color",
    "startDateField": "start",
    "endDateField": "end",
    "dataProvider": [],
    "chartCursor": {
      "cursorColor": "#55bb76",
      "valueBalloonsEnabled": false,
      "cursorAlpha": 0,
      "valueLineAlpha": 0.5,
      "valueLineBalloonEnabled": true,
      "valueLineEnabled": true,
      "zoomable": false,
      "valueZoomable": true
    },
    "export": {
      "enabled": true
    }
  };

  ngOnInit() {
    this.chart = AmCharts.makeChart("chartdiv", this.chartConfig);
  }

  ngAfterViewInit() {
    this.updateChart();
  }

  updateChart() {
    if (this.chart === undefined) return;
    for (let index = 0; index < this.techHistoryData.records.length; index++) {
      const element = this.techHistoryData.records[index];
      const segment = element.segments[0];
      segment.color = "#90caf9";
      segment.end = segment.end === "" ? new Date() : segment.end
      const startDate = new Date(segment.start);
      const endDate = new Date(segment.end);
      const numberOfMunths = endDate.getMonth() - startDate.getMonth() + (12 * (endDate.getFullYear() - startDate.getFullYear()));
      element.category = element.category + " (" + numberOfMunths + ")";
    }

    this.chart.dataProvider = this.techHistoryData.records;
    this.chart.validateData();
  }
}
