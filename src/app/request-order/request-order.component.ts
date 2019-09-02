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

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    this.fetchOrderRequests();
  }


  accept(id) {
    this.acceptOrDiscardOrder('accept', id);

  }

  discard(id) {
    this.acceptOrDiscardOrder('discard', id);

  }

  fetchOrderRequests() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/getOrderRequests', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.orderRequests = data;
      });
  }

  acceptOrDiscardOrder(request, orderid) {
    this.http.post('https://stark-chamber-32733.herokuapp.com/acceptOrder', {
      'userid': localStorage.getItem('userid')
      , 'orderid': orderid,
      'requestType' : request
    })
      .subscribe((data) => {
        this.fetchOrderRequests();

      });
  }
}
