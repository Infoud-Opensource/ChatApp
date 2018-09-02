import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, switchMap, tap, map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { RedirectService } from './redirect.service';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private data: any;
  private userData$ = new BehaviorSubject(null)

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _db: AngularFireDatabase,
    private _router: RedirectService) {
    this.subAuthState().subscribe();
  }

  private subAuthState() {
    return this._firebaseAuth.authState
      .pipe(
        filter(user => !!user),
        switchMap(user => this.getUserData(user.uid)),
        tap(_ => {
          this.updateOnConnect()
          this.updateOnDisconnect()
        })
      )
  }

  login() {
    const provider = new auth.GoogleAuthProvider()
    return this._firebaseAuth.auth.signInWithRedirect(provider)
  }

  logout() {
    this._firebaseAuth.auth.signOut();
    this.updateStatus('offline')
    localStorage.removeItem('currentUid')
    localStorage.removeItem('currentUser')
    this._router.redirectToSignIn();
  }


  private updateStatus(status: string) {
    if (!this.data || !this.data.authUid) return
    this._db.object(`users/${this.data.authUid}`).update({ status: status })
  }

  private updateOnConnect() {
    let that = this
    var connectedRef = this._db.database.ref(".info/connected");
    connectedRef.on("value", function (connected) {
      let status = connected.val() ? 'online' : 'offline'
      that.updateStatus(status)
    });
  }

  private updateOnDisconnect() {
    if (!this.data || !this.data.authUid) return

    this._db.database.ref().child(`users/${this.data.authUid}`)
      .onDisconnect()
      .update({ status: 'offline' })
  }

  isLoggedIn() { return this.getAuthState().pipe(map(user => !!user)) }

  getAuthState() { return this._firebaseAuth.authState }

  deleteUser() {
    this._firebaseAuth.auth.currentUser
      .delete()
      .then(() => {
        localStorage.removeItem('currentUid')
        localStorage.removeItem('currentUser')
        this._router.redirectToSignIn();
      })
      .catch((error) => { console.log(error) })
  }

  private getUserData(authUid) {
    return this.getUserObj(authUid)
      .valueChanges()
      .pipe(
        map((data: any) => {
          console.log(data);
          
          this.data = data
          this.userData$.next(data)
          localStorage.setItem('currentUid', data.uid)
          localStorage.setItem('currentUser', data)
        })
      )
  }

  getUserObj(authUid) { return this._db.object(`users/${authUid}`) }

  getCurrentUser() { return (this.data) ? this.data : localStorage.getItem('currentUser') }

  getCurrentUserId() { return (this.data) ? this.data.uid : localStorage.getItem('currentUid') }

  getCurrentUserObs() { return this.userData$.asObservable() }
}
