import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  user: any;
  isSubmitted = false;

  signInForm = this._fb.group({
    email: ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ["", [Validators.required]]

  });

  constructor(public _authService: AuthService, private _fb: FormBuilder) { }

  login($event) {
    $event.preventDefault();
    this.isSubmitted = true;
    this._authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  ngOnInit() {
  }

}
