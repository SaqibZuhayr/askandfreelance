import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rightsidebar-user-detail',
  templateUrl: './rightsidebar-user-detail.component.html',
  styleUrls: ['./rightsidebar-user-detail.component.css']
})
export class RightsidebarUserDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }
  userid ;
  userDetails;
  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.getDetails();
  }
  getDetails() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/userdetails', {'userid': this.userid})
      .subscribe((data) => {
      this.userDetails = data;
    });
  }

}
