import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-sidebar',
  templateUrl: './user-profile-sidebar.component.html',
  styleUrls: ['./user-profile-sidebar.component.css']
})
export class UserProfileSidebarComponent implements OnInit {

  constructor() { }
  userid: any;
  ngOnInit() {
    this.userid = localStorage.getItem('userid');
  }

}
