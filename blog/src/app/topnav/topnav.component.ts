import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../core/services/sidenav.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService
  ) { }

  openSidenav(){
    this.sidenavService.openSidenav();
  }

  ngOnInit() {
  }

}
