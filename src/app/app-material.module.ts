import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule
  ]
})
export class AppMaterialModule { }