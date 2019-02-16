import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-answercomponent',
  templateUrl: './answercomponent.component.html',
  styleUrls: ['./answercomponent.component.css']
})
export class AnswercomponentComponent implements OnInit {


  constructor(public route: ActivatedRoute, private http: HttpClient) { }
  questionID: string;
  answers ;
  ngOnInit() {
    this.route.params.subscribe( (params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/answers', {'questionID': params.id}).subscribe((data) => {
        console.log(data[0]['answer']);
        this.answers = data[0];


      });
    } );

  }



}
