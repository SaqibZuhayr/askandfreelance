import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
   addnewgigs() {
    this.router.navigate(['main/freelance/add-gig']);
  }
}
