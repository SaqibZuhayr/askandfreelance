import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gigs-main',
  templateUrl: './gigs-main.component.html',
  styleUrls: ['./gigs-main.component.css']
})
export class GigsMainComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }
  gigs;
  ngOnInit() {
    this.fetchGigs();
  }
  fetchGigs() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/fetchgigs', {})
      .subscribe((data) => {
        console.log(data);
       this.gigs = data;
      });
  }

}
