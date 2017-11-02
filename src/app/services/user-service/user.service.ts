import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/observable/forkJoin'


@Injectable()
export class UserService {

  private stateCtrl: FormControl;

  constructor(private _authService: AuthService, private _db: AngularFireDatabase, private _router: Router) { 
  }

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

  redirectToChat(convId) {
    this._router.navigate(['/home/chatRoom', convId]);
  }

  groupChat() {
    let uid1 = this._authService.userKey;
    // let uid2 = uid;
    // let uid3 = uid;

    // let ref = this._db.object(`grpMap/${uid1}/${uid2}/${uid3}`, { preserveSnapshot: true });
    // ref.subscribe(grpsnapshot => {
    //   if (grpsnapshot.exists()) {
    //     let grpId = grpsnapshot.val()
    //     this.redirectToGrpChat(grpId)
    //   }
    //   else {
    //     let group_list = []
    // group_list.push(uid1)
    // group_list.push(uid2)
    // group_list.push(uid3)
    //       this._db.list('group', { preserveSnapshot: true })
    //         .push({ "users": group_list })
    //         .then(newGrpSnapshot => {
    //           let grpId = newGrpSnapshot.val()
    //           this.redirectToGrpChat(grpId)
    //         })
    //     }
    //   })
    // }

    // redirectToGrpChat(grpId) {
    //   console.log("direct " + grpId);
    //   this._router.navigate(['/home/chatRoom', grpId]);
  }

  // getSearchOptionObservable(){
  //   return this.stateCtrl.valueChanges
  //    .filter(name => name && name.length >= 3)
  //       .flatMap(name => this.searchUser(name));
  // }


  getChats() {
    return this.getP2PMap(this._authService.userKey)
    .combineLatest(this.getAllUsers(), (val1, val2) => {return {'p2p':val1, 'users':val2}})
    .map(this.prepareChats)
  }

  private prepareChats = (result) => {
    console.log("in map");
    
    // Get all p2p uid array
    let p2p = this.getP2PFromSnapshot(result.p2p)
    let usersSnapshots = result.users
    let recent = []
    let friends = []
    this.iterateUsersSnapshot(usersSnapshots, p2p, recent, friends)

    return {
        'recent' : recent,
        'friends' : friends
      }
  }

  getP2PFromSnapshot(p2pSnapshots) {
    let p2p = []
    p2pSnapshots.forEach(peerSnapshot => p2p.push(peerSnapshot.$key))
    return p2p;
  }

  iterateUsersSnapshot(usersSnapshots, p2p : Array<any>, recent, friends) {
    usersSnapshots.forEach(userSnapshot => {
      const user = userSnapshot.val()
      if (user.uid == this._authService.userKey) return

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
    return this._db.list(`p2pMap/${uid}`, {preserveSnapshot:true})
  }

  getAllUsers() {
    return this._db.list('users', { preserveSnapshot : true})
  }

}
