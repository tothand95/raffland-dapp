import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteFooterComponent } from './components/website-footer/website-footer.component';
import { WebsiteNavbarComponent } from './components/website-navbar/website-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WebsiteComponent } from './website.component';
import { TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    WebsiteFooterComponent,
    WebsiteNavbarComponent,
    HomeComponent,
    HowItWorksComponent,
    WhitepaperComponent,
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
