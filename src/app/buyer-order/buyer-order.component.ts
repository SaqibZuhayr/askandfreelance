import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buyer-order',
  templateUrl: './buyer-order.component.html',
  styleUrls: ['./buyer-order.component.css']
})
export class BuyerOrderComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }

  myorders: any;
  ngOnInit() {
    this.fetchMyOrders();
  }

  fetchMyOrders() {
    this.http.post('http://localhost:3000/getMyOrders', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.myorders = data;
      });
  }


  download(orderFile: any) {
    //alert(orderFile)
    // this.http.get("http://localhost:3000"+orderFile )
    //   .subscribe((data) => {
    //     //this.myorders = data;
    //     console.log(data)
    //   });
  }
}
