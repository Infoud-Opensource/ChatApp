import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;
  name: string;
  user: any;
  isSubmitted = false;

   signUpForm = this._fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ["", [Validators.required]]
  });

  constructor(public _authService: AuthService, private _fb: FormBuilder) { }

  signup($event) {
    this.isSubmitted = true;
    this._authService.signup(this.email, this.password, this.name)
    .then(() => console.log("Success"))
    this.email = this.password = '';
    this.name = '';
  }

  ngOnInit() {
  }

}
