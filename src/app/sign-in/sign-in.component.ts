import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

// const EMAIL_match = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  public errorMsg = '';

  signInForm = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    pass:new FormControl('',Validators.required)
  });


  constructor(public authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  ngOnInit() {
  }

}
