import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {

  opened: boolean;
  
  constructor() { 
    this.opened = false;
  }
  
  public toggleSidenav(){
    this.opened = !this.opened;
  }
  
  public openSidenav(){
    this.opened = true;
  }
  
  public closeSidenav(){
    this.opened = false;
  }
}
