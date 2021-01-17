import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../core/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    public sidenavService: SidenavService
  ) { 
  }

  closeSidenav(){
    this.sidenavService.closeSidenav();
  }

  ngOnInit() {
  }

}
