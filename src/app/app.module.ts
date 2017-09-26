//angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule,  } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRouterModule } from './app-router/app-router.module';
import { MaterialModule } from "@angular/material";


//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 
{
  MdInputModule,
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdFormFieldModule
} from '@angular/material';
import {EmojiPickerModule} from 'ng-emoji-picker';
import { Ng2EmojiModule } from 'ng2-emoji';

//components
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';


//services
import { AuthService } from './services/auth/auth.service';
import { ErrorColorDirective } from './error-color.directive';
import { AuthStateService } from './services/auth/auth-state.service';
import { PrivateGuard } from './services/auth/private.guard';
import { PublicGuard } from './services/auth/public.guard';
import { FirebaseService } from './services/firebase/firebase.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ChatRoomComponent,
    HomeComponent,
    IndexComponent,
    ErrorColorDirective,
    UsersComponent
  ],
  imports: [
    AppRouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    EmojiPickerModule,
    MdAutocompleteModule,
    Ng2EmojiModule.forRoot(),
    MaterialModule,
    MdMenuModule,
    MdIconModule,
    MdFormFieldModule
  ],
  providers: [
    AuthService,
    AuthStateService,
    PrivateGuard,
    PublicGuard,
    FirebaseService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
