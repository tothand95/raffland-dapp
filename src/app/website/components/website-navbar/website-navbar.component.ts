import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DeoptoRoutes } from 'src/app/constants/routes';

@Component({
  selector: 'app-website-navbar',
  templateUrl: './website-navbar.component.html',
  styleUrls: ['./website-navbar.component.scss']
})
export class WebsiteNavbarComponent {
  isHeaderDummyDisplayed: boolean = false;
  isMenuOpen: boolean = false;
  deoptoRoutes = DeoptoRoutes;

  get currentLanguage() {
    return this.translateService.currentLang.toUpperCase();
  }

  constructor(private router: Router, private activeRoute: ActivatedRoute, private translateService: TranslateService) { }

  navigateTo(route: string, fragment: string | undefined = undefined) {
    this.router.navigate([route], { relativeTo: this.activeRoute.root, fragment: fragment });
    this.isMenuOpen = false;
  }

  onMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.isMenuOpen = false;

    localStorage.setItem('language', lang);
  }
}
