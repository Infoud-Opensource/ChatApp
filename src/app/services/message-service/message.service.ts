import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MessageService {
  messageRef: AngularFireList<any>;

  constructor(private _db: AngularFireDatabase, private _authService: AuthService) {
  }

  getMessages(convId) {
    this.messageRef = this._db.list(`p2p/${convId}/messages`)

    return this.messageRef.snapshotChanges()
      .map(msgs => msgs.map(msg=> ({key:msg.payload.key, ...msg.payload.val()})))
      .do(msgs => {this.sendDeliveryStatus(msgs, convId)})
  }

  sendMessage(msg, convId) {
    msg.status = "pending"
    this.messageRef.push(msg).then((msgSnapshot) => {
      const msgId = msgSnapshot.key
      return this._db.database.ref(`p2p/${convId}/messages/${msgId}`).update({"status":"sent"})
    }).then()
  }

  private sendDeliveryStatus = (msgs, convId) => {
    const currUid = this._authService.getCurrentUserId()
    let filteredMsgs = msgs.filter(msg => { return msg.sender != currUid && msg.status == "sent" })
    let data = {}
    filteredMsgs.forEach(msg => {
      let path = `p2p/${convId}/messages/${msg.key}/status`
      data[path] = "delivered"
    });
    
    if (Object.keys(data).length === 0 && data.constructor === Object) return

    this._db.database.ref().update(data).then()
  }

}
