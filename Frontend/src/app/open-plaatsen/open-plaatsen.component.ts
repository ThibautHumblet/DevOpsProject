import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-open-plaatsen',
  templateUrl: './open-plaatsen.component.html',
  styleUrls: ['./open-plaatsen.component.css']
})
export class OpenPlaatsenComponent implements OnInit {
  data: string;
  loading: boolean;

  constructor(public http: Http) { }

  ngOnInit() {
    this.makeRequest();
  }

  makeRequest(): void {
    this.http.request('http://localhost:9000/')
    .subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data)
    });
  }

}
