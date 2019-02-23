import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  Question;

  constructor(private http: HttpClient, private router: Router, private question: QuestionService) { }

  ngOnInit() {
    localStorage.setItem('component', 'q/a');
    this.question.getQuestions(undefined);
    this.question.questionObservable.subscribe(value => {
      this.Question = value;
    });

  }

  post_question() {
    console.log('asdasd');
    this.router.navigate(['main/postquestion']);
  }
}
