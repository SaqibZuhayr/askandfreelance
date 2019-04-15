import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  pendingOrders: any;
  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    this.http.post('http://localhost:3000/getPendingOrders', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.pendingOrders = data;
      });
  }

  onCancel() {
    console.log('asdasd');
  }

  onComplete() {

  }
}
