import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: FirebaseListObservable<any>;
  user;

  constructor(private _authService: AuthService,private _db: AngularFireDatabase, private _router: Router) {
    
    this.users = this._db.list(`/users`);
    this._db.list(`/users`, { preserveSnapshot:true})
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          // console.log(snapshot.key,snapshot.val());    
        });
      })
   }

   toChatRoom(uid){
    this.user = this._db.object(`users/${uid}`);
    this.user.subscribe(data => {
      if(data.$value !== null){
        console.log('user does not exist');
      }
      else{
        this._router.navigate(['/home/chatRoom']);
        console.log("user exists");            
      }
    })
   }

  ngOnInit() {}

}
