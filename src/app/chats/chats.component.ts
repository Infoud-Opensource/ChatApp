import { Component, OnInit } from '@angular/core';

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
