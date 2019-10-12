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
  MatTooltipModule,
  MatDividerModule,
  MatTabsModule,
  MatProgressSpinnerModule
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
    MatTooltipModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressSpinnerModule
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
    MatTooltipModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }