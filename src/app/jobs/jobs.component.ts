import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }
  jobs = [];
  ngOnInit() {
    this.http.post('http://localhost:3000/viewjobs', {}).subscribe((data) => {
      console.log(data);
      // @ts-ignore
      this.jobs = data;

    });
  }


  post_job() {
    this.route.navigate(['main/jobs/post-job']);
  }

  view_details() {
    this.route.navigate(['main/jobs/job-details']);
  }

}
