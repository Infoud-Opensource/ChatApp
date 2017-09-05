import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  name: Observable<firebase.UserInfo>;
  MESSAGES: FirebaseListObservable<any>;
  errorMsg: any;
  private isLoggedIn: Boolean;
  private email: String;
  public userKey: string;
  currentUser = firebase.auth().currentUser;

  constructor(private _firebaseAuth: AngularFireAuth, public _router: Router, private _db: AngularFireDatabase) {
    this._firebaseAuth.authState.subscribe(
      (auth) => {
        if (auth != null){
          this.user = _db.object('users/' + auth.uid);
          this.userKey = auth.uid;
          // this.name = _db.object('users/' + auth.name);
        }
      });
    this.MESSAGES = this._db.list('/messages');
  }

  authUser() {
    return this.user;
  }

  signup(email: string, password: string, name: string) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => { return this.sentNameToFirebase(value.uid, name) })
      .then(() => { return this._router.navigate(['home']) })
      .then(() => console.log("In succss"))
      .catch(err => console.error('Something went wrong:', err.message));
  }

  login(email: string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => this._router.navigate(['/home']))
      .catch(err => this.errorMsg = err.message);
  }

  sentNameToFirebase(uid, name) { return this._db.object(`users/${uid}`).update({ name: name }) }

  sendMessageToFirebase(msg) { this.MESSAGES.push({ "text": msg}) }

  getMessages() { return this.MESSAGES }

  getName(){  }

  logout() {
    this._firebaseAuth.auth.signOut();
    this._router.navigate(['/signIn']);
  }

  deleteUser() {
    this.currentUser.delete().then(function(){
      console.log("user deleted");
      this._router.navigate(['/signIn'])
    }).catch(function(error){
      console.log(error)
    });
  }

}
