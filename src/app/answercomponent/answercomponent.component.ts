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
  question: any = undefined;
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
      swal("Login Required", "", "error");
      return;
    }
    console.log('answer');
    this.http.post('https://stark-chamber-32733.herokuapp.com/postanswer', {
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
      this.http.post('https://stark-chamber-32733.herokuapp.com/answers', {'questionID': params.id}).subscribe((data) => {
        this.question = data;
         console.log(data);
      });
    });
  }

  onBack() {
   // console.log('asdasd');
    this.router.navigate(['/main']);
  }

  addScore(answerId) {
    // console.log(answerId, 'answrerrer')
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
    this.http.post('https://stark-chamber-32733.herokuapp.com/rateanswer', {
      rate: rate, answerId: answerId, qId: this.questionID
      , userid: this.userid
    })
      .subscribe((data) => {
        console.log(data);
        if (data['message']) {
          alert('You have already rated this answer');
        }
        this.fetchAnswer();
      });
  }


  approveAnswer(id, userid) {
    if (!localStorage.getItem('userid')) {
      alert('LOGIN REQUIRED');
      return;
    }
    if ( userid !== this.userid) {
      this.http.post('https://stark-chamber-32733.herokuapp.com/approveAnswer', {
         answerId: id, questionBy: this.userid,
         answeredBy : userid
      })
        .subscribe((data) => {
          console.log(data);
          this.fetchAnswer();
        });
    }

  }
}
