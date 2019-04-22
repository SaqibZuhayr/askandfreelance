import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  userid ;
  user ;
  firstname ;
  lastname ;
  username ;
  email ;
  password ;
  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.getDetails();


  }

  onupdate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (form.value.passtext === form.value.repasstext) {
      this.http.post('http://localhost:3000/updateprofile', {'userid': this.userid,
        'userdetail': form.value
      }).subscribe((data) => {
        if (data['message']) {
          alert('Updated profile');
        }
      });
    } else {
      alert('Password mismatched');
    }
  }

  getDetails() {
    if (!this.userid) {
      return;
    }
    this.http.post('http://localhost:3000/userdetails', {'userid': localStorage.getItem('userid'),
    }).subscribe((data) => {
      console.log(data)
      this.user = data;
      this.firstname  = this.user.first_name
      this.lastname  = this.user.last_name
      this.username  = this.user.username
      this.email  = this.user.email
      this.password  = this.user.password
    });
  }


}
