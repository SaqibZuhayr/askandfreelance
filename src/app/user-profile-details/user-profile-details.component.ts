import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  userGigs;
  order_title = '1';
  ngOnInit() {
    this.fetchUserGigs();
  }
   addnewgigs() {
    this.router.navigate(['main/userprofile/add-gig']);
  }
  fetchUserGigs(){
    this.http.post('http://localhost:3000/fetchgigs', {'userid' : localStorage.getItem('userid')})
      .subscribe((data) => {
        console.log(data);
        this.userGigs = data;
      });
  }
}
