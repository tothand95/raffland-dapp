import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DappHomeComponent } from './components/dapp-home/dapp-home.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DappHomeComponent,
    WhitepaperComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavBarComponent,
    FooterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
