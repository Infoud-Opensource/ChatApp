import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group/group.service';

 @Component({
  selector: 'app-group-chatroom',
  templateUrl: './group-chatroom.component.html',
  styleUrls: ['./group-chatroom.component.css']
})
export class GroupChatroomComponent implements OnInit {

  msg;
  msgList;
  groupId: any;
  userId: any;
  name: any;

  constructor(public _authService: AuthService, private _activateRoute: ActivatedRoute, private _msg : GroupService) { }

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
    this.groupId = data['id']
    this.msgList = this._msg.getMessages(this.groupId);
    this.name = this._authService.getCurrentUser();
  }

}
