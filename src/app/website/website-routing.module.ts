import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeoptoRoutes } from '../constants/routes';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent, children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: DeoptoRoutes.WHITEPAPER, component: WhitepaperComponent },
      { path: DeoptoRoutes.HOW_IT_WORKS, component: HowItWorksComponent },
      { path: '**', redirectTo: '' }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
