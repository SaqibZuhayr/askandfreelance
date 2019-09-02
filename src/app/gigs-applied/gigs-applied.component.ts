import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gigs-applied',
  templateUrl: './gigs-applied.component.html',
  styleUrls: ['./gigs-applied.component.css']
})
export class GigsAppliedComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) { }
  userid;
  gigs;
  ngOnInit() {
    this.fetchGigs()
  }


  fetchGigs() {
    this.route.params.subscribe((params) => {
     // console.log(params.id);
      this.userid = params.id;
      this.http.post('https://stark-chamber-32733.herokuapp.com/fetchgigs', {'userid': this.userid}).subscribe((data) => {
        this.gigs = data;
        console.log(data);
      });
    });
  }

}
