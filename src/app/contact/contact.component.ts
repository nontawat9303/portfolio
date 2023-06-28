// import { Component, OnInit } from '@angular/core';
// import { filter, Subscription } from 'rxjs';
// import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public location: Location, private router: Router) { }

  ngOnInit(): void {
  }

}
