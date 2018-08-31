import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    dataUrl = 'assets/data.json';
    defaultDataUrl = 'assets/data-default.json';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(this.dataUrl);
    }
    
    getDefaultData() {
        return this.http.get(this.defaultDataUrl);
    }
}