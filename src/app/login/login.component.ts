import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onlogin(form: NgForm) {
    // console.log("abc")
    // if (form.invalid) {
    //   return;
    // }
    // console.log("abc")
    // this.http.post('http://localhost:3000/user/auth', {
    //   'email': form.value.emailtext,
    //   'password': form.value.passtext,
    // }).subscribe((data) => {
    //   console.log(data);
    //   if (data[0]["_id"]) {
    //       this.route.navigate(['main']);
    //     //return;
    //   } else {
    //     alert("wrong credentails");
    //     //return;
    //
    //   }
    // });
    this.route.navigate(['main']);
  }
}
