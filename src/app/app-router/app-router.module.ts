import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ChatRoomComponent } from '../chat-room/chat-room.component';
import { HomeComponent } from '../home/home.component';

// auth gaurds
import { PrivateGuard } from '../services/auth/private.guard';
import { PublicGuard } from '../services/auth/public.guard';

const Routes: Routes = [
  {
    path: 'public', component: IndexComponent,
    canActivate: [PublicGuard],
    canActivateChild: [PublicGuard],
    children:[
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: 'signIn', pathMatch: 'full'},
  { path: '**', redirectTo: 'signIn' }
    ]
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard],
    children: [
      { path: 'chatRoom/:convId', component: ChatRoomComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRouterModule { }
