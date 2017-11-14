import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  
  private data: any;
  private userData$ = new BehaviorSubject(null)

  constructor(
    private _firebaseAuth: AngularFireAuth,
    public _router: Router,
    private _db: AngularFireDatabase) 
  {
    this.subAuthState().subscribe();
  }

  private subAuthState() {
    return this._firebaseAuth.authState
    .filter(user => { return user ? true : false })
    .switchMap(user => { return this.getUserData(user.uid) })
    .do(() => {
      this.updateOnConnect()
      this.updateOnDisconnect()
    })
  }


  signup(email: string, password: string, name: string) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => { return this.setNameToFirebase(value.uid, name) })
      .then(() => { this._router.navigate(['/home']) })
      .catch(err => console.error('Something went wrong:', err.message));
  }

  login(email: string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => { this._router.navigate(['/home']) })
      .catch(err => { console.log('Something went wrong:', err.message) });
  }

  logout() {
    this._firebaseAuth.auth.signOut();
    this.updateStatus('offline')
    localStorage.removeItem('currentUid')
    localStorage.removeItem('currentUser')
    this._router.navigate(['/public/signIn']);
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

  isLoggedIn() { return this.getAuthState().map(user => user ? true : false) }

  getAuthState() { return this._firebaseAuth.authState }

  setNameToFirebase(authUid, name) { return this._db.object(`users/${authUid}`).update({ name: name }) }

  deleteUser() {
    this._firebaseAuth.auth.currentUser
      .delete()
      .then(() => {
        localStorage.removeItem('currentUid')
        localStorage.removeItem('currentUser')
        this._router.navigate(['/public/signIn']) 
      })
      .catch((error) => { console.log(error) })
  }

  private getUserData(authUid) {
    return this.getUserObj(authUid)
      .valueChanges()     
      .map((data:any) => {
        this.data = data
        this.userData$.next(data)
        localStorage.setItem('currentUid', data.uid)
        localStorage.setItem('currentUser', data)
      })
  }

  getUserObj(authUid) { return this._db.object(`users/${authUid}`) }

  getCurrentUser() { return (this.data) ? this.data : localStorage.getItem('currentUser') }

  getCurrentUserId() { return (this.data) ? this.data.uid : localStorage.getItem('currentUid') }

  getCurrentUserObs() { return this.userData$.asObservable() }
}