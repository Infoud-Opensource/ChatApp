import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';

const Routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'signIn', pathMatch: 'full'},
  
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
