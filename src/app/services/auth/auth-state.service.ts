import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FirebaseService  } from '../firebase/firebase.service'

@Injectable()
export class AuthStateService {

  private token;
  private user;
  private authenticationState : BehaviorSubject<boolean>;
  private authenticationStateObservable : Observable<boolean>;

  constructor(private _router : Router, private _fb : FirebaseService) {
    this.authenticationState = new BehaviorSubject<boolean>(false);
    this._fb.getAuthState().subscribe(this.onAuthStateChanged)
  }

  isLoggedIn(){ 
    // if (!this.authenticationStateObservable) {
    //   this.authenticationStateObservable = this.authenticationState.asObservable() 
    // }
    return this._fb.getAuthState().map(user => user ? true : false);
  }

  setAuthenticationState(state : boolean) { this.authenticationState.next(state) }

  setToken = (token) => { this.token = token }

  setUser(user) { this.user = user }

  getToken() { return this.token; }

  checkIfAuthenticated() {
    let state = this.token ? true : false;
    this.setAuthenticationState(state);
  }

  private onAuthStateChanged = (user) => {
    if (user) {
      user.getIdToken().then(this.setToken);
      this.setUser(user);
    } else {
      this.setToken(null)
      this.setUser(null);
    }
  }

  login(token) { return this._fb.login(token) }

  logout() { return this._fb.logout().then(data => this._router.navigate(["/public"])) }
}
