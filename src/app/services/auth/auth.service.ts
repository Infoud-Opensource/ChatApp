import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  userId: String;
  user: Observable<firebase.User>;
  private authState : any;

  constructor(private firebaseAuth: AngularFireAuth, public _router: Router , private db:AngularFireDatabase) { 
 // this.user = firebaseAuth.authState;
    this.firebaseAuth.authState
        .do(user => {
          if(user){
            this.userId = user.uid
            this.updateOnConnect()
            this.updateOnDisconnect()
          }
    })
    .subscribe();
  }

  private updateStatus(status : string)
    {
      if(!this.userId) return
        this.db.object(`users/${this.userId}`).update({status : status})
    }
  
  private updateOnConnect()
  {
    return this.db.object('. info/connected')
    .do(connected =>{
      let status = connected.$value ? 'online' : 'offline'
         this.updateStatus(status)
    })
    .subscribe()
  }

  private updateOnDisconnect()
  {
    firebase.database().ref().child('users/$this.userId')
    .onDisconnect()
    .update({status : 'offline'})
  }

  signup(email: string, password: string, name: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState='user';
        const status = 'online';
      })
      .then(() => console.log("In succss"))
      .then(() => this._router.navigate(['../signIn']))
      .catch(err => console.error('Something went wrong:', err.message));
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigate(['../home'])
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  
  logout() {
    this.firebaseAuth.auth.signOut();
    this.updateStatus('offline')
    this._router.navigate(['/signIn']);
  }


   isLoggedIn(){ 
    // if (!this.authenticationStateObservable) {
    //   this.authenticationStateObservable = this.authenticationState.asObservable() 
    // }
    return this.getAuthState().map(user => user ? true : false);
  }

  getAuthState() { return this.firebaseAuth.authState }

}


