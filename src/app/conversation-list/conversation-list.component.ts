import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {

  conversations: any;

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    this.fetchConversations();

  }

  fetchConversations() {
    this.http.post('https://stark-chamber-32733.herokuapp.com/getConversations', {'userid': localStorage.getItem('userid')})
      .subscribe((data) => {
        this.conversations = data;
        console.log(data);


      });
  }

  chat(id, username) {
    // console.log(this.receiverid,this.receivername)
    this.router.navigate(['main/userprofile/chat/'], {queryParams: {id: id, name: username}});
  }
}
