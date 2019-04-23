import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert';
import {main} from '@angular/compiler-cli/src/main';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private user: UserService) {
  }

  ngOnInit() {
  }


  onlogin(form: NgForm) {
    console.log('abc');
    if (form.invalid) {
      return;
    }
    console.log('abc');
    this.user.login(form).subscribe((data) => {
      let res: any = [];
      res = data;
      if (res.length > 0) {
        console.log('login sucessfully');
        if (data[0]['_id']) {
          localStorage.setItem('userid', data[0]['_id']);
          localStorage.setItem('username', data[0]['username']);
          swal('Login:', 'Successful', 'success');
          this.route.navigate(['main']);
        }
      } else {
       // alert('wrong credentails');
        swal('Login:', 'UnSuccessful', 'error');
      }
    });


  }
}
