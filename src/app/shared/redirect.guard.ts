import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { RedirectService } from '../core/redirect.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private _afAuth: AngularFireAuth, private _router: RedirectService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._afAuth.auth.getRedirectResult().then(result => {
        if(result.user != null) {
          this._router.redirectToHome()
          return false;
        }
        return true;
      });
  }
}
