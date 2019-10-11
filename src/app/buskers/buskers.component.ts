import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { buskers } from '../buskers';

@Component({
  selector: 'app-buskers',
  templateUrl: './buskers.component.html',
  styleUrls: ['./buskers.component.css']
})
export class BuskersComponent implements OnInit {
  buskers = buskers;

  constructor() { }

  ngOnInit() {
  }

}