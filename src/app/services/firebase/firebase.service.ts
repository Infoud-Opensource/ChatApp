import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class FirebaseService {

  constructor(private _afAuth: AngularFireAuth, private _afDB: AngularFireDatabase) { }

  login(token) { return Observable.fromPromise(this._afAuth.auth.signInWithCustomToken(token)) }

  logout() { return this._afAuth.auth.signOut() }

  getAuthState() { return this._afAuth.authState }

  private refreshToken() : Observable<any> { 
    let user = this._afAuth.auth.currentUser;
    if (user)
      return Observable.fromPromise(user.getIdToken())
    else 
      return Observable.create(obs => obs.next(null))
  }
}
