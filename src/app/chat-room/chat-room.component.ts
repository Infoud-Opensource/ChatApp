import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { AuthService } from '../services/auth/auth.service';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  msg;
  msgList;
  user;
  convId: any;


  constructor(public _authService: AuthService, private _db: AngularFireDatabase, private _activateRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this._authService.getUserObj()
    .subscribe(snapshot => { this.user = snapshot.val() })
    this._activateRoute.params.subscribe(this.onRouteParam);
    
  }

  sendMessage() {
    if (!this.user || !this.msg) return

    this.msgList.push({ 
      "text": this.msg,
      "sender": this.user.name
    })
    this.msg = "";
  }

  isYou(email) {
    if(email == this._authService.currentUser)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this._authService.currentUser)
      return false;
    else
      return true;
  }

  onRouteParam = (data) => {
    this.convId = data.convId
    this.msgList = this._authService.getMessages(this.convId);
  }
}