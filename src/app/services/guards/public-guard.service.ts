import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, Route } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PublicGuardService {

  constructor(private _auth:AuthService,private _router:Router) { }

   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._auth.isLoggedIn().map(status => {
        if (status) this._router.navigate(["/home"])
        // .then(data => console.log(data)).catch(data => console.log(data))
        return !status
      });
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.isLoggedIn().map(status => !status);
  }

}
