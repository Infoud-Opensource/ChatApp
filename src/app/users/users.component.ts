import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: FirebaseListObservable<any>;
  user: any;
  currentUserUid: any;

  constructor(private _authService: AuthService, private _db: AngularFireDatabase, private _router: Router,private _userService: UserService) { }

  toChatRoom(uid) {
    this._userService.toChatRoom(uid);
  }

  private redirectToChat(convId) {
   this._userService.redirectToChat(convId);
  }

  groupChat(gid){
    this._userService.groupChat(gid);
  }

  private redirectToGrpChat(grpId){
   this._userService.redirectToGrpChat(grpId);
  }

  ngOnInit() {
    this.users = this._db.list(`/users`);
    this.currentUserUid = this._authService.userKey;
  }

}

