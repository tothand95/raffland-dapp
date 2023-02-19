import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { DeoptoRoutes } from './constants/routes';
import { DappModule } from './dapp/dapp.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DeoptoRoutes.HOME },
  { path: DeoptoRoutes.HOME, component: HomeComponent },
  { path: DeoptoRoutes.DAPP, loadChildren: () => import('./dapp/dapp.module').then(m => m.DappModule) },
  { path: DeoptoRoutes.WHITEPAPER, component: WhitepaperComponent },
  { path: DeoptoRoutes.HOW_IT_WORKS, component: HowItWorksComponent },
  { path: '**', redirectTo: DeoptoRoutes.HOME }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
