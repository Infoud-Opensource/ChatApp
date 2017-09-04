import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, Route } from '@angular/router';
import { AuthStateService } from './auth-state.service';

@Injectable()
export class PublicGuard implements CanActivate {

  constructor(private _router: Router,private _afAuth: AngularFireAuth, private _authState: AuthStateService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._authState.isLoggedIn().map(status => {
        if (status) this._router.navigate(["/home"])
        // .then(data => console.log(data)).catch(data => console.log(data))
        return !status
      });
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authState.isLoggedIn().map(status => !status);
  }
}
