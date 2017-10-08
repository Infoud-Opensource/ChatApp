import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  entryComponents: [UserListComponent]
})
export class UsersComponent implements OnInit {

   myControl: FormControl = new FormControl();

  users: FirebaseListObservable<any>;
  user: any;
  currentUserUid: any;
  stateCtrl: any;

  constructor(private _authService: AuthService, private _db: AngularFireDatabase, private _router: Router,private _userService: UserService, public _dialog: MdDialog) { }

  toChatRoom(uid) {
    this._userService.toChatRoom(uid);
  }

  private redirectToChat(convId) {
   this._userService.redirectToChat(convId);
  }

  groupChat(){
    let dialogRef = this._dialog.open(UserListComponent, {
      width: '500px',
      height: '500px'
    });
  }

  ngOnInit() {
    this.user = this._userService.getSearchOptionObservable()
    this.users = this._db.list(`/users`);
    this.currentUserUid = this._authService.userKey;
  }

}

