import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: FirebaseListObservable<any>;

  constructor(private _authService: AuthService,private _db: AngularFireDatabase) {
    // this.users = this._db.list(`/users/uid/email`);
    this._db.list(`/users`, { preserveSnapshot:true})
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key,snapshot.val());    
        });
      })
   }

  ngOnInit() {}

}
