import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-answercomponent',
  templateUrl: './answercomponent.component.html',
  styleUrls: ['./answercomponent.component.css']
})
export class AnswercomponentComponent implements OnInit {


  constructor(public route: ActivatedRoute, private http: HttpClient) { }
  questionID: string;
  answers = [];
  userid = ' ';
  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.fetchAnswer();
  }
  onPostAnswer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('answer');
    this.http.post('http://localhost:3000/postanswer', {
      'answer':  form.value.answer,
      'questionID': this.answers['_id'],
      'userid': this.userid})
      .subscribe((data) => {
      console.log(data);
      this.fetchAnswer();
    });


  }
  fetchAnswer() {
    this.route.params.subscribe( (params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/answers', {'questionID': params.id}).subscribe((data) => {
        console.log(data[0]);
        this.answers = data[0];
       // console.log(this.answers);


      });
    } );
  }



}
