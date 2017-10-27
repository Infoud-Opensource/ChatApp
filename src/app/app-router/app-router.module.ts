import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';
import { IndexComponent } from '../index/index.component';

// auth gaurds
import { PrivateGuardService } from '../services/guards/private-guard.service';
import { PublicGuardService } from '../services/guards/public-guard.service';

const Routes: Routes = [
  {
    path: 'public', component: IndexComponent,
    canActivate: [PublicGuardService],
    canActivateChild: [PublicGuardService],
    children:[
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  // { path: '', redirectTo: 'signIn', pathmatch: 'full'},
  { path: '**', redirectTo: 'signIn' }
    ]
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [PrivateGuardService],
    canActivateChild: [PrivateGuardService],
    children: [
      // { path: '', redirectTo: 'home', pathmatch: 'full'},
      { path: '**', redirectTo: 'home' }
    ]
  },
  // { path: '', redirectTo: 'public', pathmatch: 'full' },
  { path: '**', redirectTo: 'public' }
]
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
