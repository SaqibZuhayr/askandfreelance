import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-account-freelance',
  templateUrl: './account-freelance.component.html',
  styleUrls: ['./account-freelance.component.css']
})
export class AccountFreelanceComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  addnewgigs() {
    this.router.navigate(['main/freelance/add-gig']);
  }

}
