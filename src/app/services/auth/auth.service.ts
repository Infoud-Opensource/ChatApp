import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  message: FirebaseListObservable<any>;
  currentUser = firebase.auth().currentUser;
  public userKey: string;

  constructor(private firebaseAuth: AngularFireAuth, public _router: Router,private _db: AngularFireDatabase) { 
    this.user = firebaseAuth.authState;
    this.firebaseAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = _db.object(`users/${auth.uid}`);
          this.userKey = auth.uid;
          // this.name = _db.object('users/' + auth.name);
        }
      });
    this.message = this._db.list('/messages');
  }

  authUser() {
    return this.user;
  }

  signup(email: string, password: string, name: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      // .then(value => { return this.sentNameToFirebase(value.uid, name) })
      .then(() => console.log("In succss"))
      .then(() => this._router.navigate(['../signIn']))
      .catch(err => console.error('Something went wrong:', err.message));
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigate(['../home'])
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  getUserObj() { return this._db.object(`users/${this.userKey}`, { preserveSnapshot: true }); }

   isLoggedIn(){ 
    // if (!this.authenticationStateObservable) {
    //   this.authenticationStateObservable = this.authenticationState.asObservable() 
    // }
    return this.getAuthState().map(user => user ? true : false);
  }

  sentNameToFirebase(uid, name) { return this._db.object(`users/${uid}`).update({ name: name }) }  

  sendMessageToFirebase(msg) { this.message.push({ "text": msg }) }
  
  getMessages(convId) { return this._db.list(`p2p/${convId}/messages`) }
  

  getAuthState() { return this.firebaseAuth.authState }

  logout() {
    this.firebaseAuth.auth.signOut();
    this._router.navigate(['/signIn']);
  }

}
