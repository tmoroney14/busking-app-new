import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { buskers } from '../buskers';
import { SafePipe } from '../safe.pipe';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;

   constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.busker = buskers[+params.get('buskerId')];
  });
  }

}