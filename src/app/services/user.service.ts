import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient) { }


  login(form) {
    return this.http.post('https://stark-chamber-32733.herokuapp.com/user/auth', {
      'email': form.value.emailtext,
      'password': form.value.passtext,
    });
  }
}
