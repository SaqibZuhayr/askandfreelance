import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) { }
  userAccount: any = undefined;
  ngOnInit() {
    this.getAccountDetails();
  }

  getAccountDetails() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/getAccountDetails', {
      'userid': localStorage.getItem('userid')
    })
      .subscribe((data) => {
        this.userAccount = data;
        console.log(this.userAccount);
      });
  }

}
