import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions = new BehaviorSubject<any>([]);
  questionObservable = this.questions.asObservable();

  constructor(private http: HttpClient) { }

  getQuestions(tag, id, search) {
    this.http.post('https://stark-chamber-32733.herokuapp.com/questions', {tag, id, search}).subscribe((data) => {
          this.questions.next(data);
          console.log(this.questions);
    });
  }





}
