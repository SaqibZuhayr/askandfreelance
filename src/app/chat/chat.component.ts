import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  tabElement: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.tabElement = document.querySelector('');

  }

  ngAfterViewInit() {
   //  this.tabElement.style.display = 'none';
  }

}
