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
  name;
  ownEmail: string;
  isOwnMessage: boolean;
  public messageString: string = "";


  constructor(public _authService: AuthService, private _db: AngularFireDatabase) {
    // _authService.authUser().subscribe (user => {
    //   this.ownEmail = user.email;
    //   this.isOwnMessage = this.ownEmail === this.userEmail;
    // })
    this.messageString = "Hello, how are you? :smile:";
  }
  ngOnInit() { 
    this.msgList = this._authService.getMessages();
    this.name = this._authService.getName();  
  }

  sendMessage() { 
    this._authService.sendMessageToFirebase(this.msg);
    this.msg = "";
  }
}