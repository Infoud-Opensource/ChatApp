import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
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
  MatTabsModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { UserActiveStatusComponent } from './user-active-status.component';
import { MessageDeliveryStatusComponent } from './message-delivery-status.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  declarations: [UserActiveStatusComponent, MessageDeliveryStatusComponent]
})
export class SharedModule { }
