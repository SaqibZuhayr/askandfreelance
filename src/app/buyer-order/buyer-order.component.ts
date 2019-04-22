import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-buyer-order',
  templateUrl: './buyer-order.component.html',
  styleUrls: ['./buyer-order.component.css']
})
export class BuyerOrderComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  comment: any;
  myorders: any;

  ngOnInit() {
    this.comment = '';
    this.fetchMyOrders();
  }

  fetchMyOrders() {
    this.http.post('http://localhost:3000/getMyOrders', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.myorders = data;
        console.log(this.myorders);
      });
  }

  onReview(form: NgForm, gigid, orderid) {
    if (form.invalid) {
      return;
    }


    if (!localStorage.getItem('userid')) {
      alert('LOGIN REQUIRED');
      return;
    }

    // console.log(form.value);
    this.http.post('http://localhost:3000/addreview', {
      order_id: orderid,
      client_id: localStorage.getItem('userid'),
      reviews_rating: form.value.rate,
      comment: form.value.review,
      gigid: gigid
    })
      .subscribe((data) => {
        this.comment = '';
        if (data['message']) {
          alert('Review posted');
        }

      });

  }


  // download(orderFile: any) {
  //   //alert(orderFile)
  //   // this.http.get("http://localhost:3000"+orderFile )
  //   //   .subscribe((data) => {
  //   //     //this.myorders = data;
  //   //     console.log(data)
  //   //   });
  // }
}
