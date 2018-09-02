import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { RedirectService } from '../core/redirect.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanActivateChild {

  constructor(private _auth: AuthService, private _router: RedirectService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.isLoggedIn().pipe(map(status => {
      if (status) this._router.redirectToHome()
      return !status
    }));
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.isLoggedIn().pipe(map(status => !status));
  }
}
