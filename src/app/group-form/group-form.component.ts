import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  users : any;
  selectedUsers = []

  name = new FormControl('', Validators.required)

  constructor(private _userService: UserService) { }

  ngOnInit() { this.users = this._userService.getAllUsersForGroups() }

  createGroup(event) {
    if (! this.isValid()) return
    console.log("valid");
    
    this._userService.groupChat(this.name.value, this.selectedUsers)
  }

  toggleUser(event, uid) {
    if (event) {
      this.selectedUsers.push(uid)
    } else {
      this.selectedUsers.splice(this.selectedUsers.indexOf(uid), 1)
    }
  }

  private isValid(){ return this.name.valid && this.selectedUsers.length }
}