import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trendingtagsquestion',
  templateUrl: './trendingtagsquestion.component.html',
  styleUrls: ['./trendingtagsquestion.component.css']
})
export class TrendingtagsquestionComponent implements OnInit {

  constructor(private question: QuestionService, private http: HttpClient) {
  }

  questiontags;

  ngOnInit() {
    this.getQuestionCategories();
    this.question.questionObservable.subscribe((value) => {
      // this.questions = value;
    });
  }

  searchTag(tag) {
    this.question.getQuestions(tag, undefined, undefined);

  }

  getQuestionCategories() {
    this.http.get('https://stark-chamber-32733.herokuapp.com/getquestiontags').subscribe((data) => {
      this.questiontags = data;
    });
  }
}
