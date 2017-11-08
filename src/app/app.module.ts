//angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRouterModule } from './app-router/app-router.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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

//services
import { AuthService } from './services/auth/auth.service';
import { PrivateGuardService } from './services/guards/private-guard.service';
import { PublicGuardService } from './services/guards/public-guard.service';
import { UserService } from './services/user-service/user.service';
import { UploadProfileService} from './services/upload-photo/upload-photo.service';
import { MessageService } from './services/message-service/message.service';


//components
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { DisplayStatusComponent } from './display-status/display-status.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    IndexComponent,
    UsersComponent,
    ChatRoomComponent,
    ChatsComponent,
    SettingsComponent,
    GroupFormComponent,
    DisplayStatusComponent,
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
    UserService,
    MessageService,
    UploadProfileService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
