import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-answercomponent',
  templateUrl: './answercomponent.component.html',
  styleUrls: ['./answercomponent.component.css']
})
export class AnswercomponentComponent implements OnInit {


  questionID: string;
  question: any;
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
      'questionID': this.question['questionid'],
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
      this.questionID = params.id;
      this.http.post('http://localhost:3000/answers', {'questionID': params.id}).subscribe((data) => {
        this.question = data;
        // console.log(data);
      });
    });
  }

  onBack() {
    console.log('asdasd');
    this.router.navigate(['/main']);
  }

  addScore(answerId) {
    this.ratingAnswer('add', answerId);

  }

  subScore(answerId) {
    this.ratingAnswer('sub', answerId);
  }


  ratingAnswer(rate, answerId) {
    if (!localStorage.getItem('userid')) {
      alert('LOGIN REQUIRED');
      return;
    }
    this.http.post('http://localhost:3000/rateanswer', {
      rate: rate, answerId: answerId, qId: this.questionID
      , userid: this.userid
    })
      .subscribe((data) => {
        console.log(data);
        if(data['message']){
          alert('You have already rated this answer');
        }
        this.fetchAnswer();
      });
  }


}
