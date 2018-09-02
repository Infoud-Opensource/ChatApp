import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { RedirectService } from '../core/redirect.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate, CanActivateChild, Resolve<any> {

  constructor(private _auth: AuthService, private _router: RedirectService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.isLoggedIn()
      .pipe(
        map(status => {
          if (!status) this._router.redirectToSignIn()
          return status
        }));
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.isLoggedIn()
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this._auth.getCurrentUser()
  }
}
