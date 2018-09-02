import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule  } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: []
})
export class CoreModule { }
