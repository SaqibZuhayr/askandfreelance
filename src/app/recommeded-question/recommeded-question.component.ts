import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-recommeded-question',
  templateUrl: './recommeded-question.component.html',
  styleUrls: ['./recommeded-question.component.css']
})
export class RecommededQuestionComponent implements OnInit {
  @Input() questionID: string;
  suggestedQuestions: any;
  fetchedData: any;
  ans = '/main/answer/';
  constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) { }

  ngOnInit() {
    // console.log(this.questionID);
    this.getSuggestedQuestions();

  }


  getSuggestedQuestions(){
    this.http.post('https://stark-chamber-32733.herokuapp.com/suggestedQuestions', {
      'questionID': this.questionID
    })
      .subscribe((data) => {
        console.log(data);
        this.suggestedQuestions = data
        // this.fetchedData = data;
        // this.fetchedData.forEach(item => {
        //   item.forEach(q => {
        //     this.suggestedQuestions.push({'qid': q._id, 'question' : q.question});
        //   });
        //
        //
        // });
       // console.log(this.suggestedQuestions)


      });
  }

}
