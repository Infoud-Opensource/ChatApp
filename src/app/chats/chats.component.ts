import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  chats = {
    recent : [],
    friends : []
  }

  groups = []

  constructor(private _userService : UserService, private _authService: AuthService) { 
   }


  ngOnInit() {
    // Get Chats
    this._userService
    .getChats()
    .subscribe((data: any)=> {
      this.chats.recent = data.recent;
      this.chats.friends = data.friends;
    })

    // Get Groups
    this._userService
    .getAllGroups()
    .subscribe((data) => {
      this.groups = data;
    })
  }

  goToGroupChatroom(grpId){
    this._userService.redirectToGrpChat(grpId)
  }

  goToChat(uid) {
    this._userService.toChatRoom(uid)
  }

  logout() {
    this._authService.logout();
  }
}