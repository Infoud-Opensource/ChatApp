import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';

const PENDING = 1
const SENT = 2
const DELIVERED = 3

@Injectable()
export class MessageService {
  messageRef: AngularFireList<any>;

  constructor(private _db: AngularFireDatabase, private _authService: AuthService) {
  }

  getMessages(convId) {
    this.messageRef = this._db.list(`p2p/${convId}/messages`)

    return this.messageRef.snapshotChanges()
      .map(msgs => msgs.map(msg=> ({key:msg.payload.key, ...msg.payload.val()})))
      .do(msgs => {this.updateStatus(msgs, convId)})
  }

  sendMessage(msg) {
    msg.status = PENDING
    this.messageRef.push(msg)
  }

  private updateStatus = (msgs, convId) => {
    this.doProcess(msgs, convId, this.sentPredicate, SENT)
    this.doProcess(msgs, convId, this.deliverPredicate, DELIVERED)
  }

  private deliverPredicate(msg, currUid) { return msg.sender != currUid && msg.status == SENT }

  private sentPredicate(msg, currUid) { return msg.sender == currUid && msg.status == PENDING }

  private doProcess(msgs, convId, predicate, status) {
    const currUid = this._authService.getCurrentUserId()
    let filteredMsgs = msgs.filter(msg => { return predicate(msg, currUid) })
    let data = {}
    filteredMsgs.forEach(msg => {
      let path = `p2p/${convId}/messages/${msg.key}/status`
      data[path] = status
    });
    
    if (Object.keys(data).length === 0 && data.constructor === Object) return

    this._db.database.ref().update(data).then()
  }

}
