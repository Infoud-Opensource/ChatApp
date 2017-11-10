import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/observable/forkJoin'


@Injectable()
export class UserService {

  private stateCtrl: FormControl;

  constructor(private _authService: AuthService, private _router: Router, private _db: AngularFireDatabase) {
  }

  toChatRoom(uid) {
    let uid1 = this._authService.getCurrentUserId();
    let uid2 = uid;

    let ref = this._db.object(`p2pMap/${uid1}/${uid2}`)
      .snapshotChanges()
      .subscribe(convSnapshot => {
        if (convSnapshot.payload.exists()) {
          // Redirect to chat with snapshot val as conversation id
          let convId = convSnapshot.payload.val()
          this.redirectToChat(convId)
        } else {

          // create conversation
          let users_list = []
          users_list.push(uid1)
          users_list.push(uid2)

          this._db.list('p2p')
            .push({ "users": users_list })
            .then(newConvSnapshot => {
              // redircet to chat with push id as  conversation id
              let convId = newConvSnapshot.key
              this.redirectToChat(convId)
            })
        }
      })
  }

  redirectToChat(convId) {
    this._router.navigate(['/home/chatRoom', convId]);
  }

  getChats() {
    return this.getP2PMap(this._authService.getCurrentUserId())
      .combineLatest(this.getAllUsers(), (val1, val2) => { return { 'p2p': val1, 'users': val2 } })
      .map(this.prepareChats)
  }

  prepareChats = (result) => {
    // Get all p2p uid array
    let p2p = this.getP2PFromSnapshot(result.p2p)
    let usersSnapshots = result.users
    let recent = []
    let friends = []
    this.iterateUsersSnapshot(usersSnapshots, p2p, recent, friends)

    return {
      'recent': recent,
      'friends': friends
    }
  }

  getP2PFromSnapshot(p2pSnapshots) {
    let p2p = []
    p2pSnapshots.forEach(peerSnapshot => p2p.push(peerSnapshot.payload.key))
    return p2p;
  }

  iterateUsersSnapshot(usersSnapshots, p2p: Array<any>, recent, friends) {
    usersSnapshots.forEach(userSnapshot => {
      const user = userSnapshot.payload.val()
      if (user.uid == this._authService.getCurrentUserId()) return

      if (p2p.includes(user.uid)) {
        // Recent
        recent.push(user)
      } else {
        // Friends
        friends.push(user)
      }
    })
  }

  getP2PMap(uid) {
    return this._db.list(`p2pMap/${uid}`).snapshotChanges()
  }

  getAllUsers() {
    return this._db.list('users').snapshotChanges()
  }

  getAllUsersForGroups() {
    return this._db.list('users')
      .snapshotChanges(['child_removed'])
      .map((actions) => {
        return actions
          .map(action => action.payload.val()) 
          .filter(user => user.uid != this._authService.getCurrentUserId())
      })
  }

  getAllGroups() {
    const uid = this._authService.getCurrentUserId()
    return this._db.list(`groupMap/${uid}`)
      .snapshotChanges()
      .map(groups => groups.map(group=> ({grpId:group.payload.key, ...group.payload.val()})))
  }

  toGroupChat(name, users) {
    let uid1 = this._authService.getCurrentUserId();

    let group_list = []
    group_list.push(uid1)
    group_list.push(...users)
    console.log(group_list);
    

    this._db.list('groups', )
      .push({ "users": group_list, "name":name })
      .then(newGrpSnapshot => {
        console.log("success");
        
        let grpId = newGrpSnapshot.key
        this.redirectToGrpChat(grpId)
      })
  }

  redirectToGrpChat(grpId) {
    console.log("direct " + grpId);
    this._router.navigate(['/home/groupRoom', grpId]);
  }

  // getSearchOptionObservable(){
  //   return this.stateCtrl.valueChanges
  //    .filter(name => name && name.length >= 3)
  //       .flatMap(name => this.searchUser(name));
  // }

}
