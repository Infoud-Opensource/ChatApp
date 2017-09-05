import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
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

  constructor(private _authService: AuthService, private _db: AngularFireDatabase, private _router: Router) { }

  toChatRoom(uid) {
    let uid1 = this._authService.userKey;
    let uid2 = uid;

    let ref = this._db.object(`p2pMap/${uid1}/${uid2}`, { preserveSnapshot: true });
    ref.subscribe(convSnapshot => {
      if (convSnapshot.exists()) {
        // Redirect to chat with snapshot val as conversation id
        let convId = convSnapshot.val()
        this.redirectToChat(convId)
      } else {
        // create conversation
        let users_list = []
        users_list.push(uid1)
        users_list.push(uid2)
        this._db.list('p2p', { preserveSnapshot: true })
          .push({ "users": users_list })
          .then(newConvSnapshot => {
            // redircet to chat with push id as  conversation id
            let convId = newConvSnapshot.val()
            this.redirectToChat(convId)
          })
      }
    })
  }

  private redirectToChat(convId) {
    console.log("in redirect   " + convId);
    
    this._router.navigate(['/home/chatRoom', convId]);
  }



  ngOnInit() {
    this.users = this._db.list(`/users`);
    this.currentUserUid = this._authService.userKey;
  }

}

