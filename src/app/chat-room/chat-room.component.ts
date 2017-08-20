import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  msg;
  msgList;

  constructor(public _authService: AuthService) {}

  ngOnInit() { this.msgList = this._authService.getMessages() }

  sendMessage() { 
    console.log(this.msg);
    this._authService.sendMessageToFirebase(this.msg) 
    this.msg = "";
  }



  logout() {
    this._authService.logout();
  }
}