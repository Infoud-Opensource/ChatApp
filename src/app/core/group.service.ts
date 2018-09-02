import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

const PENDING = 1
const SENT = 2


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  messageRef: AngularFireList<any>;

  constructor(private _db: AngularFireDatabase, private _authService: AuthService) {

   }
   getMessages(groupId) {
    this.messageRef = this._db.list(`groups/${groupId}/messages`)
    return this.messageRef.snapshotChanges()
      .pipe(
        map(msgs => msgs.map(msg=> ({key:msg.payload.key, ...msg.payload.val()}))),
        tap(msgs => {this.updateStatus(msgs, groupId)})
      )
   }
   sendMessage(msg) {
    msg.status = PENDING
    this.messageRef.push(msg)
  }
  private updateStatus = (msgs, groupId) => {
    this.doProcess(msgs, groupId, this.sentPredicate, SENT)
  }

  private sentPredicate(msg, currUid) { return msg.sender == currUid && msg.status == PENDING }

  private doProcess(msgs, groupId, predicate, status) {
    const currUid = this._authService.getCurrentUserId()
    let filteredMsgs = msgs.filter(msg => { return predicate(msg, currUid) })
    let data = {}
    filteredMsgs.forEach(msg => {
      let path = `groups/${groupId}/messages/${msg.key}/status`
      data[path] = status
    });
    
    if (Object.keys(data).length === 0 && data.constructor === Object) return

    this._db.database.ref().update(data).then()
  }
}
