import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { AuthService } from '../services/auth/auth.service';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message-service/message.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  msg;
  msgList;
  convId: any;
  user: any

  constructor(public _authService: AuthService, private _db: AngularFireDatabase, private _activateRoute: ActivatedRoute, private _msg : MessageService) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(this.onRouteParam);
    this.user = this._authService.getCurrentUser()
  }
  sendMessage() {
    if (!this.user || !this.msg) return

    this._msg.sendMessage({ 
      "text": this.msg,
      "sender": this.user.name
    })
    this.msg = "";
  }

  onRouteParam = (data) => {
    this.convId = data.convId
    this.msgList = this._msg.getMessages(this.convId)
  }


}
