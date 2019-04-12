import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-postquestion',
  templateUrl: './postquestion.component.html',
  styleUrls: ['./postquestion.component.css']
})
export class PostquestionComponent implements OnInit {

  userid = '';
  username = '';

  constructor(private route: Router, private http: HttpClient, private location: Location) {
  }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.username = localStorage.getItem('username');
  }

  onPostQuestion(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (!localStorage.getItem('userid')) {
      alert('LOGIN REQUIRED');
      return;
    }
    console.log('postQuestion');
    console.log(this.userid);
    this.http.post('http://localhost:3000/postquestion', {
      'category': form.value.title,
      'question': form.value.question, 'userid': this.userid, 'askedBy': this.username
    }).subscribe((data) => {
      console.log(data);
      this.route.navigate(['main']);
    });
  }

  back() {
    if (location.pathname === '/main') {
      this.route.navigate(['main']);
    } else {
      this.route.navigateByUrl('/main/userprofile/myquestion');
    }

  }


}
