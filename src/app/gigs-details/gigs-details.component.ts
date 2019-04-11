import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-gigs-details',
  templateUrl: './gigs-details.component.html',
  styleUrls: ['./gigs-details.component.css']
})
export class GigsDetailsComponent implements OnInit {
  receivername: string;
  receiverid: string;
  userid: string;
  Gig;

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.fetchGigDetails();
  }

  fetchGigDetails() {

    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/gigdetail', {'gigid': params.id}).subscribe((data) => {
        this.receiverid = data['userid'];
        this.receivername = data['username'];
        this.Gig = data;


      });
    });
  }

  chat() {
    // console.log(this.receiverid,this.receivername)
    this.router.navigate(['main/userprofile/chat/'], {queryParams: {id: this.receiverid, name: this.receivername}});
  }
  onOrder(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (!localStorage.getItem('userid')) {
      alert('LOGIN REQUIRED');
      return;
    }
    this.http.post('http://localhost:3000/submitOrder', {'order':  form.value, 'userid': this.userid,
         'receiverid': this.receiverid, 'gigid':this.Gig._id})
      .subscribe((data) => {
        console.log(data);
      });
  }

}
