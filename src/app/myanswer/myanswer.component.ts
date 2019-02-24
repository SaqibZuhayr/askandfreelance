import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-myanswer',
  templateUrl: './myanswer.component.html',
  styleUrls: ['./myanswer.component.css']
})
export class MyanswerComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }
  userAnswers;
  ngOnInit() {
    this.fetchUserAnswers();
  }

  fetchUserAnswers(){
    this.http.post('http://localhost:3000/useranswers', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
      console.log(data);
      this.userAnswers = data;

    });

  }

}
