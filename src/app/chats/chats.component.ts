import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  chats = {
    recent : [],
    friends : []
  }

  constructor() { }


  ngOnInit() {
  }
  

}