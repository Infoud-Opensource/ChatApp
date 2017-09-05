import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  logout() {
    this._authService.logout();
  }

  deleteUser(){
    this._authService.deleteUser();
  }
  ngOnInit() {
  }

}
