import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  onsignup(form: NgForm) {
    if (form.invalid) {
      swal("Signup", "UnSuccessful", "error");
    }

    this.http.post('https://stark-chamber-32733.herokuapp.com/user', {
      'first_name': form.value.firstext,
      'last_name': form.value.lasttext,
      'email': form.value.emailtext,
      'username': form.value.usertext,
      'password': form.value.passtext
    }).subscribe((data) => {
      swal("Signup", "Succesful", "success");
      this.router.navigate(['']);
    });
  }

}
