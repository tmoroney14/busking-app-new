import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdsenseModule } from 'ng2-adsense';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopperComponent } from './topper/topper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BuskersComponent } from './buskers/buskers.component';
import { DetailsComponent } from './details/details.component';
import { GridComponent } from './grid/grid.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule, 
    RouterModule, 
    FlexLayoutModule, 
    AppRoutingModule, 
    AppMaterialModule, 
    FontAwesomeModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4911143915999917',
      adSlot: 7259870550,
    }),
    ],
  declarations: [ AppComponent, HomeComponent, TopperComponent, ToolbarComponent, BuskersComponent, DetailsComponent, GridComponent, SafePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
