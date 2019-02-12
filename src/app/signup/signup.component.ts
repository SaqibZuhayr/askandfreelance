import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onsignup(form: NgForm) {
   if (form.invalid) {
     return;
   }

    this.http.post("http://localhost:3000/user", {'first_name':  form.value.firstext,
        'last_name': form.value.lasttext,
        'email':   form.value.emailtext,
        'username' : form.value.usertext,
        'password' : form.value.passtext}).subscribe((data) => {
          console.log(data);
    });
  }

}
