import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient) { }
  job = {};
  ngOnInit() {
    this.route.params.subscribe( (params) => {
      console.log(params.id);
      this.http.post('https://stark-chamber-32733.herokuapp.com/jobdetails', {'jobID': params.id}).subscribe((data) => {
        console.log(data);
        this.job = data;
        // console.log(this.answers);


      });
    } );
  }

  apply_job() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/applyjob', {'jobID': this.job['_id'],
    'userid': localStorage.getItem('userid')
    }).subscribe((data) => {
     // console.log(data);
       alert(data['message']);
    });
  }
}
