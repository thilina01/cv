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
    const data = [];
    for (let index = 0; index < this.techHistoryData.records.length; index++) {
      const record = this.techHistoryData.records[index];
      record.end = record.end === "" ? new Date() : record.end
      const startDate = new Date(record.start);
      const endDate = new Date(record.end);
      const numberOfMunths = endDate.getMonth() - startDate.getMonth() + (12 * (endDate.getFullYear() - startDate.getFullYear()));
      const y = numberOfMunths / 12 | 0;
      const m = numberOfMunths % 12;
      record.category = record.category + " (" + (y > 0 ? y + "Y " : "") + m + "M)";

      const element = {
        "category": record.category,
        "segments": [
          {
            "start": startDate,
            "end": endDate,
            "color": "#90caf9"
          }
        ]
      };
      data.push(element);
    }
    this.chart.dataProvider = data;
    this.chart.validateData();
  }
}
