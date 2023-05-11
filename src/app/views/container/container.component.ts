import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { sidenav } from 'src/app/shared/data/sidenav/sidenav.const';
import { NavItem } from 'src/app/shared/models/nav-item';
 
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  //sidenav: NavItem[] = sidenav
  
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  // private sidenav: MatSidenav;


  constructor(
    private sidenavService: SidenavService,
  ) { }

  ngOnInit(): void {
    
    

  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  close(): void {
    this.sidenav.close();
  }

  

}
