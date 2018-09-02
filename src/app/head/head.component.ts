import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  @Input() headData: any;
  imageDefaultUrl = "assets/img/user-default.png";
  imageUrl = "assets/img/user.png";

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get(this.imageUrl);
  }

  getDefaultImage() {
    return this.http.get(this.imageDefaultUrl);
  }

  ngOnInit() {
    this.getImage()
      .subscribe((data: any) => {
      }, error => {
        if (error.status === 404) {
          this.imageUrl = this.imageDefaultUrl;
        }
      });
  }

}