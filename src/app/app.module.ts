//angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRouterModule } from './app-router/app-router.module';

//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 
{
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';


//components
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';


//services
import { AuthService } from './services/auth/auth.service';
import { PrivateGuardService } from './services/guards/private-guard.service';
import { PublicGuardService } from './services/guards/public-guard.service';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    IndexComponent,
    ChatRoomComponent,
    FriendsComponent,
  ],
  imports: [
    AppRouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [
    AuthService,
    PrivateGuardService,
    PublicGuardService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
