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
    this._userService
    .getChats()
    .subscribe((data: any)=> {
      this.chats.recent = data.recent;
      this.chats.friends = data.friends;
    })
    this._userService
    .getAllGroups()
    .subscribe((data) => {
      this.groups = data;
    })
  }

  goToGroupChatroom(uid){
    this._userService.toGroupChat(name, uid)
  }

  goToChat(uid) {
    this._userService.toChatRoom(uid)
  }

  logout() {
    this._authService.logout();
  }
}