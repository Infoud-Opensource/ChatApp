import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthStateService } from './auth-state.service';
import 'rxjs/add/operator/map';

@Injectable()
export class PrivateGuard implements CanActivate {

  constructor(private _afAuth: AngularFireAuth, private _router: Router, private _authState: AuthStateService ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._authState.isLoggedIn().map(status => {
        if (!status) this._router.navigate(["/public"]).then(data => console.log(data)).catch(data => console.log(data))
        return status
      });
    }

      canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._authState.isLoggedIn()
      }
}
