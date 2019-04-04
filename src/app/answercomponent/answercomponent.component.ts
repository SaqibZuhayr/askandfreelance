import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-answercomponent',
  templateUrl: './answercomponent.component.html',
  styleUrls: ['./answercomponent.component.css']
})
export class AnswercomponentComponent implements OnInit {


  questionID: string;
  answers = [];
  userid = ' ';
  username = ' ';

  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.username = localStorage.getItem('username');
    this.fetchAnswer();
  }

  onPostAnswer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (!localStorage.getItem('userid')) {
      alert('LOGIN REQUIRED');
      return;
    }
    console.log('answer');
    this.http.post('http://localhost:3000/postanswer', {
      'answer': form.value.answer,
      'questionID': this.answers['_id'],
      'userid': this.userid,
      'answeredBy': this.username
    })
      .subscribe((data) => {
        console.log(data);
        this.fetchAnswer();
      });


  }

  fetchAnswer() {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/answers', {'questionID': params.id}).subscribe((data) => {
        console.log(data[0]);
        this.answers = data[0];
        // console.log(this.answers);


      });
    });
  }

  onBack() {
    console.log('asdasd');
    this.router.navigate(['/main']);
  }

  addScore() {
    console.log('123');
  }

  subScore() {
    console.log('abc');
  }


}
