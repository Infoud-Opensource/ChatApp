import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private _router: Router) { }

  redirectToHome() { return this._router.navigate(['/home']) }

  redirectToSignIn() { return this._router.navigate(['/public/signin']) }

  redirectToChatRoom(roomId) { return this._router.navigate(['/home/chatRoom', roomId]) }

  redirectToGroupRoom(roomId) { return this._router.navigate(['/home/groupRoom', roomId]) }
}
