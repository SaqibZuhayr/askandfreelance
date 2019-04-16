import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.css']
})
export class RequestOrderComponent implements OnInit {

  orderRequests: any;
  ordertitle: any;
  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    this.fetchOrderRequests();
  }


  accept(id) {
    this.http.post('http://localhost:3000/acceptOrder', {
      'userid': localStorage.getItem('userid')
      , 'orderid': id
    })
      .subscribe((data) => {
        console.log(data);
        this.orderRequests = data;
      });

  }

  discard(id) {

  }

  fetchOrderRequests() {
    this.http.post('http://localhost:3000/getOrderRequests', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.orderRequests = data;
      });
  }
}
