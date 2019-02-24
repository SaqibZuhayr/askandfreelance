import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {QuestionService} from '../services/question.service';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  Question;

  constructor(private http: HttpClient, private router: Router, private question: QuestionService, private location: Location) {
  }

  ngOnInit() {
    if (location.pathname === '/main') {
      localStorage.setItem('component', 'q/a');
      this.question.getQuestions(undefined);
      this.question.questionObservable.subscribe(value => {
        this.Question = value;
      });
    } else {
      console.log(location.pathname);
      // yeh user k apnay question hn
    }

  }

  post_question() {
    console.log('asdasd');
    this.router.navigate(['main/postquestion']);
  }

}
