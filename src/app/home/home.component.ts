import { Component, AfterViewInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Routes } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { buskers } from '../buskers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  buskers = buskers;

  showToggle: string;
  mode: string;
  openSidenav:boolean;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav') matSidenav: MatSidenav;


  ngOnInit() {
    this.getScreenWidth().subscribe(width => {
       if (width < 900) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 900) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

  ngAfterViewInit () {
            !function(d,s,id){
                var js: any,
                    fjs=d.getElementsByTagName(s)[0],
                    p='https';
                if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src=p+"://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js,fjs);
                }
            }
            (document,"script","twitter-wjs");
    }

}