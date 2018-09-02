import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router/app-router.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    IndexComponent,
    HomeComponent,
    ChatsComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
