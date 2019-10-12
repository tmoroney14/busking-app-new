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
       if (width < 10000) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 10000) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

  constructor(private _router: Router) {
    this.initTwitterWidget();
  }

  initTwitterWidget() {
    this.twitter = this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        (<any>window).twttr = (function (d, s, id) {
          let js: any, fjs = d.getElementsByTagName(s)[0],
              t = (<any>window).twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f: any) {
              t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));

        if ((<any>window).twttr.ready())
          (<any>window).twttr.widgets.load();

      }
    });
  }

  ngOnDestroy() {
    this.twitter.unsubscribe();
  }

}