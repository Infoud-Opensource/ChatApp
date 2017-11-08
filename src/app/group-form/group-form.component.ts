import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  
  friends = [];

  constructor(private _userService : UserService) { }

  ngOnInit() {
    this._userService
    .getChats()
    .subscribe((data: any)=> {
      console.log(data);
      
      this.friends = data.friends;
  })
  }
  goToGroupChat(name, uid) {
    this._userService.groupChat(name, uid)
  }
}