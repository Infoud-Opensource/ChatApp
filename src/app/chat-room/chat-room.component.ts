import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { AuthService } from '../services/auth/auth.service';
import * as firebase from 'firebase/app';
 

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  msg;
  msgList;
  userEmail: string;
  ownEmail: string;
  isOwnMessage: boolean;
  timeStamp: Date = new Date();
  timeSent: Date = new Date ();
  public messageString: string = "";


  constructor(public _authService: AuthService) {
    // _authService.authUser().subscribe (user => {
    //   this.ownEmail = user.email;
    //   this.isOwnMessage = this.ownEmail === this.userEmail;
    // })
    this.messageString = "Hello, how are you? :smile:";
  }

  

  ngOnInit() { 
    this.msgList = this._authService.getMessages();
  }

  logout() {
    this._authService.logout();
  }

  sendMessage() { 
    this._authService.sendMessageToFirebase(this.msg);
    this.timeStamp = this.msg.timeSent;
    this.msg = "";
  }
}