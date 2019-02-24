import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gigs-details',
  templateUrl: './gigs-details.component.html',
  styleUrls: ['./gigs-details.component.css']
})
export class GigsDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient) { }
  Gig;
  ngOnInit() {
    this.fetchGigDetails();
  }

  fetchGigDetails(){

    this.route.params.subscribe( (params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/gigdetail', {'gigid': params.id}).subscribe((data) => {
        // console.log(data[0]);
        this.Gig = data;



      });
    } );
  }

}
