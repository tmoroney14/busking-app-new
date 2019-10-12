import { Component, AfterViewInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Routes } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { buskers } from '../buskers';

@Component({
  selector: 'app-buskers',
  templateUrl: './buskers.component.html',
  styleUrls: ['./buskers.component.css']
})
export class BuskersComponent implements OnInit {
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

}