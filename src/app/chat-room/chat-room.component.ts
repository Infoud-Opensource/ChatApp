import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
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
  userId: any;
  name: any;

  constructor(public _authService: AuthService, private _activateRoute: ActivatedRoute, private _msg : MessageService) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(this.onRouteParam);
    this.userId = this._authService.getCurrentUserId()
  }
  sendMessage() {
    if (!this.userId || !this.msg) return

    this._msg.sendMessage({ 
      "text": this.msg,
      "sender": this.userId,
    })
    this.msg = "";
  }

  isYou(id) {
    return id != this.userId
  }
  isMe(id) {
    return id == this.userId
  }

  onRouteParam = (data) => {
    this.convId = data['id']
    this.msgList = this._msg.getMessages(this.convId);
    this.name = this._authService.getCurrentUser();
  }


}
