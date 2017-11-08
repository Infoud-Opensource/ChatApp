import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import * as fb from 'firebase';
import 'rxjs/add/operator/finally';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../auth/auth.service'

@Injectable()
export class UploadProfileService {

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase, private _auth :AuthService) { }

  private basePath: string = '/profilepic';
  private uploadTask: fb.storage.UploadTask;

  updateUserProfilePic(url): Observable<any> {
    const uid = this._auth.getCurrentUser().authUid
    return Observable
      .fromPromise(<Promise<any>>this._db.object(`/users/${uid}`)
      .update({ 'imageUrl': url }))
  }

  pushUpload(file) {
    let storageRef = fb.storage().ref();
    const uid = this._auth.getCurrentUser().authUid
    let task = storageRef.child(`${this.basePath}/${uid}/dp`).put(file);
    let errorFlag = false;

    let observable = new Observable(obs => {
        task.on(fb.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => obs.next(snapshot),
          (err) => { errorFlag = true; obs.error(err); },
          () => obs.complete());
      })
      .map((snapshot: any) => (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      .finally(() => {
        if (!errorFlag) {
          var downloadURL = task.snapshot.downloadURL;
          this.updateUserProfilePic(downloadURL).subscribe();
        }
      })
    return observable;
  }
}
