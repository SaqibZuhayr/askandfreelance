import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sidebar-freelance',
  templateUrl: './sidebar-freelance.component.html',
  styleUrls: ['./sidebar-freelance.component.css']
})
export class SidebarFreelanceComponent implements OnInit {

  freelancetags;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getFreelanceCategories();
  }

  getFreelanceCategories() {
    this.http.get('https://stark-chamber-32733.herokuapp.com/getfreelancetags').subscribe((data) => {
      this.freelancetags = data;
    });
  }

}
