import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit {

  userGigs;
  order_title = '1';

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchUserGigs();
  }

  addnewgigs() {
    this.router.navigate(['main/userprofile/add-gig']);
  }

  fetchUserGigs() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/fetchgigs', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        console.log(data);
        this.userGigs = data;
      });
  }
}
