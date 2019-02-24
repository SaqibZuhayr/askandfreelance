import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: 'Ask and Freelance';
  user;
  loggedIn = false;
  current = '/main/freelance';

  constructor(private router: Router, private location: Location) {
  }
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
    localStorage.clear();
    this.router.navigate(['login']);
  }

  onSearch(form: NgForm) {

    console.log(form.value);
      if ((location.pathname).toString().substring(0, this.current.length) === this.current) {
      console.log(location.pathname);
      // freelance component
    } else {
      console.log(location.pathname + '  else');
      // question component
    }
  }

}
