import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) { }
  myjobs: any;
  ngOnInit() {
    this.getMyJobs();
  }
  getMyJobs() {
    this.route.params.subscribe((params) => {
      // console.log(params.id);
      this.http.post('https://stark-chamber-32733.herokuapp.com/myjobs', {'userid': params.id}).subscribe((data) => {
        this.myjobs = data;
        console.log(data);
      });
    });
  }

}
