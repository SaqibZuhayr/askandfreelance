import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) { }

  SendMessage(senderId, receiverId, receiverName, message): Observable<any>{
    return this.http.post(`http://localhost:3000/chat/${senderId}/${receiverId}`,{
      receiverId,
      receiverName,
      message
    });
  }
}
