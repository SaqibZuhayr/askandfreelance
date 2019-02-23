import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-trendingtagsquestion',
  templateUrl: './trendingtagsquestion.component.html',
  styleUrls: ['./trendingtagsquestion.component.css']
})
export class TrendingtagsquestionComponent implements OnInit {

  constructor(private question: QuestionService) { }

  questions = []

  ngOnInit() {
    this.question.questionObservable.subscribe((value) => {
      this.questions = value;
    });
  }

  searchTag(tag) {
    this.question.getQuestions(tag);
  }
}
