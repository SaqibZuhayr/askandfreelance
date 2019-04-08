import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  tabElement: any;

  constructor() {
  }

  ngOnInit() {
    this.tabElement = document.querySelector('app-sidebar-freelance');
  }

  ngAfterViewInit() {
    this.tabElement.style.display = 'none';
  }

}
