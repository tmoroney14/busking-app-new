import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatRippleModule,
  MatGridListModule,
  MatExpansionModule,
  MatIconModule
  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatRippleModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatRippleModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }