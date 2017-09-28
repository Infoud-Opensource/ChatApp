import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: FirebaseListObservable<any>;
  user: any;
  currentUserUid: any;

  constructor(private _authService: AuthService, private _db: AngularFireDatabase, private _userService: UserService) { }

  toChatRoom(uid) {
    this._userService.toChatRoom(uid);
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
