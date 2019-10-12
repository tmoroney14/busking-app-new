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
  MatIconModule,
  MatTooltipModule,
  MatDividerModule
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
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
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
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ]
})
export class AppMaterialModule { }