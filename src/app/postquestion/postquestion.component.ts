import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import swal from 'sweetalert';

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
      swal("Invalid Values", "", "error");
    }
    if (!localStorage.getItem('userid')) {
      swal("Login Required", "", "error");
    }
    console.log('postQuestion');
    console.log(this.userid);
    this.http.post('https://stark-chamber-32733.herokuapp.com/postquestion', {
      'category': form.value.title,
      'question': form.value.question, 'userid': this.userid, 'askedBy': this.username
    }).subscribe((data) => {
      swal("Question Added", "", "success");
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
