import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: 'Ask and Freelance';

  constructor(private router: Router) { }
  user;
  loggedIn = false;
  ngOnInit() {
    if (localStorage.getItem('userid') != null) {
      this.loggedIn = true;
      this.user = {
        'userid' : localStorage.getItem('userid'),
        'username' : localStorage.getItem('username')
      };
    }

  }
  signout() {
    this.loggedIn = false;
    localStorage.setItem('userid', null);
    localStorage.setItem('username', null);
    this.router.navigate(['login']);
  }

}
