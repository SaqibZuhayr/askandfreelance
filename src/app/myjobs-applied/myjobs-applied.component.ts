import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-myjobs-applied',
  templateUrl: './myjobs-applied.component.html',
  styleUrls: ['./myjobs-applied.component.css']
})
export class MyjobsAppliedComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) { }
  applicants: any;
  ngOnInit() {
    this.viewApplications();
  }
  viewApplications() {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/getapplicants', {'jobID': params.id}).subscribe((data) => {
        this.applicants = data;
        console.log(data);
      });
    });
  }

}
