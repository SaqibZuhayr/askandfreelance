import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  fileToUpload: File = null;
  pendingOrders: any;
  formData: any;
  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    this.getPendingOrders();
  }

  onCancel() {
    console.log('asdasd');
  }

  getPendingOrders(){
    this.http.post('http://localhost:3000/getPendingOrders', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.pendingOrders = data;
      });
  }

  onComplete(id, orderid, gigid) {

    if (this.fileToUpload) {
      this.formData.append('userid', id);
      this.formData.append('myid', localStorage.getItem('userid'));
      this.formData.append('orderid', orderid);
      this.formData.append('gigid', gigid);
      this.http.post('http://localhost:3000/deliverOrder', this.formData)
        .subscribe((data) => {
          console.log(data);
          this.getPendingOrders();
        });
    }

  }

  handleFileInput(files: FileList) {
    this.formData = new FormData();
    this.fileToUpload = files.item(0);
    this.formData.append('file', this.fileToUpload);
    console.log(this.fileToUpload);
  }
}


