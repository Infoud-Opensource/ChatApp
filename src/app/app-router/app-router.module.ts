import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component';
import { HomeComponent } from '../pages/home/home.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { ChatsComponent } from '../pages/chats/chats.component';
import { ChatRoomComponent } from '../pages/chat-room/chat-room.component';
import { PublicGuard } from '../shared/public.guard';
import { PrivateGuard } from '../shared/private.guard';
import { RedirectGuard } from '../shared/redirect.guard';


const routes: Routes = [
  {
    path: 'public', component: IndexComponent,
    canActivate: [PublicGuard],
    canActivateChild: [PublicGuard],
    children: [
      { path: 'signIn', component: SignInComponent, canActivate: [RedirectGuard] },
      { path: '', redirectTo: 'signIn', pathMatch: 'full' },
      { path: '**', redirectTo: 'signIn' },

    ]
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    children: [
      { path: 'chats', component: ChatsComponent },
      { path: 'chatRoom/:id', component: ChatRoomComponent },
      // { path: 'settings', component: SettingsComponent },
      // { path: 'group', component: GroupFormComponent},
      // { path: 'groupRoom/:id', component: GroupChatroomComponent },
      { path: '', redirectTo: 'chats', pathMatch: 'full', resolve: { user: [PrivateGuard] } },
      { path: '**', redirectTo: 'chats' },

    ]
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouterModule { }
