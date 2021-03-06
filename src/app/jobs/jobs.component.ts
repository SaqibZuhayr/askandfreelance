import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs = [];
  trendingtag;

  constructor(private route: Router, private http: HttpClient) {
  }

  ngOnInit() {
    // this.jobTrending();
    this.http.post('https://stark-chamber-32733.herokuapp.com/viewjobs', {}).subscribe((data) => {
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

  // jobTrending() {
  //   this.http.get('http://localhost:3000/gettrendingjobs').subscribe((data) =>
  //     this.trendingtag = data);
  // }

}
