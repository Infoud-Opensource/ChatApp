import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  MESSAGES: FirebaseListObservable<any>;
  errorMsg : any;
  private isLoggedIn: Boolean;
  private email: String;

  constructor(private _firebaseAuth: AngularFireAuth, public _router: Router, private _db: AngularFireDatabase) {
    this.user = _firebaseAuth.authState;
    this.MESSAGES = this._db.list('/messages');
  }

  authUser(){
    return this.user;
  }

  signup( email: string, password: string) {
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this._router.navigate(['/signIn']);
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      });
  }

  login( email: string, password: string) {
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigate(['/home']);
      })
      .catch(err => { this.errorMsg = err.message;
        console.error('Something went wrong:', err.message);
      });
  }

  sendMessageToFirebase(msg) { 
    this.MESSAGES.push({ "text": msg, "time": new Date() }) 
  }

  getMessages() { 
    return this.MESSAGES 
  }

  

  logout() {
    this._firebaseAuth.auth.signOut();
    this._router.navigate(['/signIn']);
  }

}
