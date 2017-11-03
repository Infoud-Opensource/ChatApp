import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class AuthService {
  public userKey: string;
  message: FirebaseListObservable<any>;
  data:any;

  constructor(private _firebaseAuth: AngularFireAuth, public _router: Router, private _db: AngularFireDatabase) { 
    this.message = this._db.list('/messages');

    this._firebaseAuth.authState
      .do(user => {
        if (user) {
          this.updateOnConnect()
          this.updateOnDisconnect()

          const userSubscription = _db.object(`users/${user.uid}`, {preserveSnapshot:true})
            .subscribe(snapshot => {
              this.data = snapshot.val();
              this.userKey = this.data.uid
              userSubscription.unsubscribe()
            })
        }
      })
      .subscribe();
  }


  signup(email: string, password: string, name: string) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => { return this.sentNameToFirebase(value.uid, name) })
      .then(() => {
        this._router.navigate(['../signIn'])
      })
      .catch(err => console.error('Something went wrong:', err.message));
      
      
  }

  login(email: string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigate(['../home'])
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this._firebaseAuth.auth.signOut();
    this.updateStatus('offline')
    this._router.navigate(['/signIn']);
  }

  
  private updateStatus(status: string) {
    if (!this.data.authUid) return
    this._db.object(`users/${this.data.authUid}`).update({ status: status })
  }

  private updateOnConnect() {
    let that = this
    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(connected) {
      let status = connected.val() ? 'online' : 'offline'
        that.updateStatus(status)
    });
  }

  private updateOnDisconnect() {
    firebase.database().ref().child(`users/${this.data.authUid}`)
      .onDisconnect()
      .update({ status: 'offline' })
  }

  isLoggedIn() {
    // if (!this.authenticationStateObservable) {
    //   this.authenticationStateObservable = this.authenticationState.asObservable() 
    // }
    return this.getAuthState().map(user => user ? true : false);
  }

  getAuthState() { return this._firebaseAuth.authState }

  sentNameToFirebase(uid, name) { return this._db.object(`users/${uid}`).update({ name: name }) }

  getMessages(convId) { return this._db.list(`p2p/${convId}/messages`) }


  getName(){ return this._db.object(`users/${name}`)}


  getUserObj() { return this._db.object(`users/${this.userKey}`, { preserveSnapshot: true }); }


  deleteUser() {
    this._firebaseAuth.auth.currentUser.delete().then(function () {
    // this.currentUser.delete().then(function () {
      console.log("user deleted");
      this._router.navigate(['/signIn'])
    }).catch(function (error) {
      console.log(error)
    });
  }

  sendMessageToFirebase(msg) { this.message.push({ "text": msg }) }


}