import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopperComponent } from './topper/topper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BuskersComponent } from './buskers/buskers.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, RouterModule, FlexLayoutModule, AppRoutingModule, AppMaterialModule ],
  declarations: [ AppComponent, HomeComponent, TopperComponent, ToolbarComponent, BuskersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
