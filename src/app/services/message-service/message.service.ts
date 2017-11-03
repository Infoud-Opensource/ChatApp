import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class MessageService {
  message: AngularFireList<any>;

  constructor(private _db: AngularFireDatabase) {
  }

  getMessages(convId) {
    this.message = this._db.list(`p2p/${convId}/messages`)

    return this.message.valueChanges()
  }

  sendMessage(msg) { this.message.push(msg) }

}
