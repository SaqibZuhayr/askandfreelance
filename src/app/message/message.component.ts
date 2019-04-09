import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';
import {ActivatedRoute} from '@angular/router';
import io from 'socket.io-client';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  tabElement: any;
  receivername: string;
  receiverid: string;
  message = 'saqib';
  username: string;
  messageArray = [];
  socket: any;
  typingMessage;
  typing = false;

  constructor(private msgService: MessageService, private route: ActivatedRoute) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    // console.log('asdasds');
    this.route.queryParams.subscribe(params => {
      this.receivername = params.name;
      this.receiverid = params.id;
      this.username = localStorage.getItem('username');
      this.GetAllMessages(localStorage.getItem('userid'), this.receiverid);
      this.socket.on('refreshPage', () => {
        this.GetAllMessages(localStorage.getItem('userid'), this.receiverid);
      });


    });

    this.socket.on('is_typing', data => {

      if (data.sender === this.receivername) {
        this.typing = true;
      }
    });

    this.socket.on('has_stop', data => {
      if (data.sender === this.receivername) {
        this.typing = false;
      }
    });

  }

  sendMessage() {
    if (this.message) {
      this.msgService
        .SendMessage(localStorage.getItem('userid'), localStorage.getItem('username'), this.receiverid, this.receivername, this.message)
        .subscribe(data => {
          console.log(data);
          this.socket.emit('refresh', {});
          this.message = '';
          this.tabElement = document.querySelector('input');
          this.tabElement.text = '';

        });
    }
  }

  GetAllMessages(senderid, receiverid) {
    this.msgService.GetMessage(senderid, receiverid).subscribe(data => {
        console.log(data);
        this.messageArray = data.messages.message;
      }
    );
  }

  isTyping() {
    this.socket.emit('start_typing', {
      sender: localStorage.getItem('username'),
      receiver: this.receivername
    });

    if (this.typingMessage) {
      clearTimeout(this.typingMessage);
    }

    this.typingMessage = setTimeout(() => {
      this.socket.emit('stop_typing', {
        sender: localStorage.getItem('username'),
        receiver: this.receivername
      });
    }, 500);

  }


}
