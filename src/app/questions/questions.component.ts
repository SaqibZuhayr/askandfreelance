import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  Question;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.post('http://localhost:3000/questions', {}).subscribe((data) => {
      console.log(data);
      this.Question = data;
    });

  }

  post_question() {
    console.log('asdasd');
    this.router.navigate(['main/postquestion']);
  }
}
