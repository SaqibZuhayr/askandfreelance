import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  SendMessage(senderId, senderName, receiverId, receiverName, message): Observable<any> {
    return this.http.post(`https://stark-chamber-32733.herokuapp.com/chat`, {
      senderId,
      senderName,
      receiverId,
      receiverName,
      message
    });
  }

  GetMessage(senderId, receiverId): Observable<any> {
    return this.http.post(`https://stark-chamber-32733.herokuapp.com/getchat`, {
      senderId,
      receiverId,
    });
  }
}
