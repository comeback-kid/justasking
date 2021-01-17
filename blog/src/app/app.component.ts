import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import { environment } from '../environments/environment';

import { SidenavService } from './core/services/sidenav.service';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private router:Router,
    private sidenavService:SidenavService
    ) {
      router.events.subscribe( (event) => {
        if(event instanceof NavigationStart) {
        }
        if(event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
          this.sidenavService.closeSidenav();
          if(environment.production){
            gtag('config', 'UA-104568848-2');            
          }
      }
    });
  }
}
