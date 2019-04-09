import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  tabElement: any;
  receivername: string;
  receiverid: string;
  message: string = 'saqib';
  messageArray = [];

  constructor(private msgService: MessageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log('asdasds');
    this.route.queryParams.subscribe(params => {
      this.receivername = params.name;
      this.receiverid = params.id;
      this.GetAllMessages(localStorage.getItem('userid'), this.receiverid);

    });

  }

  sendMessage() {
    if (this.message) {
      this.msgService
        .SendMessage(localStorage.getItem('userid'), localStorage.getItem('username'), this.receiverid, this.receivername, this.message)
        .subscribe(data => {
          console.log(data);
          this.message = '';
          this.tabElement = document.querySelector('input');
          this.tabElement.text = '';
        });
    }
  }

  GetAllMessages(senderid, receiverid) {
    this.msgService.GetMessage(senderid, receiverid).subscribe(data => {
        console.log(data);
      }
    );
  }

  func() {
    console.log(this.message);
  }

}
