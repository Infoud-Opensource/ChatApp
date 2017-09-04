import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: FirebaseListObservable<any>;

  constructor(private _authService: AuthService,private _db: AngularFireDatabase, private _router: Router) {
    this.users = this._db.list(`/users`);
    this._db.list(`/users`, { preserveSnapshot:true})
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          // console.log(snapshot.key,snapshot.val());    
        });
      })
   }

  //  toChatRoom(){
  //   if(this.users )
  //   this._router.navigate(['/chatRoom']);
  //  }

  ngOnInit() {
  }

}
