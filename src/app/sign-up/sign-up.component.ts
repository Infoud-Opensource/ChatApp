import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';


// const EMAIL_match = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public errorMsg = '';
  isSubmitted = false;
  name: string;
  email: string;
  password: string;

  registerForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    pass:new FormControl('',Validators.required)
  });

  constructor(public authService: AuthService) { }

  signup(event) {
    this.isSubmitted = true;
    this.authService.signup(this.email, this.password, this.name)
    .then(() => console.log("Success"))
    this.email = this.password = '';
    this.name = '';
  }

  ngOnInit() {
  }

}
