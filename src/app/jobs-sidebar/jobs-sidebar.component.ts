import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-jobs-sidebar',
  templateUrl: './jobs-sidebar.component.html',
  styleUrls: ['./jobs-sidebar.component.css']
})
export class JobsSidebarComponent implements OnInit {
  jobtags;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTrendingJobs();
  }

  getTrendingJobs() {
    this.http.get('http://localhost:3000/getjobtags').subscribe((data) => {
      this.jobtags = data ;
    });

  }
}
