import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/services/company.service';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStoreService } from 'src/app/_services/token-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showFiller = false;

  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('icon') icon: any;

  companys: string[] = ['全部', 'A', 'B', 'C', 'D', 'E'];
  selectedCompany!: string;
  menuOpenStatus!: boolean;

  //檢查路由
  forCheckIsSetting: string[] = [
    'sap-byd-account',
    'company-info',
    'account',
  ];

  constructor(
    private sidenav: SidenavService,
    private companyServ: CompanyService,
    private tokenStore: TokenStoreService,
    private authService: AuthService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.btn.nativeElement && e.target !== this.icon._elementRef.nativeElement) {
        this.menuOpenStatus = false;
      }
    });
    this.router.events.subscribe(
      i => {
        this.changeCompanyToAllWhenUrl(this.forCheckIsSetting);
      }
    );
  }

  ngOnInit(): void {
    this.selectedCompany = this.companys[0];
  }

  opensubmenu() {
    if (this.checkUrl(this.forCheckIsSetting)) {
      return;
    }
    this.menuOpenStatus = !this.menuOpenStatus;
  }

  checkUrl(urls: string[]) {
    if (!urls) {
      return;
    }
    return urls.some(i => this.router.url.includes(i));
  }
  logout(): void {
    this.tokenStore.signOut();
    this.authService.logout();
    this.router.navigate(['login']);
  }

  changeCompanyToAllWhenUrl(urls: string[]) {
    if (this.checkUrl(urls)) {
      this.selectCompany('全部');
    }
  }

  selectCompany(item: any) {
    this.selectedCompany = item;
    this.companyServ.changeCompany(item);
  }


  toggleRightSidenav() {
    this.sidenav.toggle();
  }

  opened() {
    console.log('芝麻開門');
  }

  closed() {
    console.log('芝麻關門');
  }
}
