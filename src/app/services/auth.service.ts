import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, public _router: Router) { 
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string, name: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      // .then(value => { return this.sentNameToFirebase(value.uid, name) })
      .then(() => { return this._router.navigate(['./signIn']) })
      .then(() => console.log("In succss"))
      .catch(err => console.error('Something went wrong:', err.message));
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigate(['./home'])
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }


}
