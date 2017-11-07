import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  users: any;
  user: any;
  currentUserUid: any;
  name: any;
  userKey: any;


  constructor() { }

  ngOnInit() {
  }

}
