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

  getQuestions(tag){
    this.http.post('http://localhost:3000/questions', {tag}).subscribe((data) => {
          this.questions.next(data);
    });
  }



}
