import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'ica-sign-in',
  template: `
    <div class="top-section"></div>
    <div class="public-main">
        <mat-card class="public-card">
            <h2>Welcome to IMessengerLite</h2>
            <button color="accent" type="submit" mat-raised-button (click)="login()">Sign In</button><br>
        </mat-card>
    </div>
  `,
  styles: []
})
export class SignInComponent {
  constructor(private _auth: AuthService) { }

  login() { this._auth.login() }
}
