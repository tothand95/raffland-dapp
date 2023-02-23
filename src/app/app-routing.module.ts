import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeoptoRoutes } from './constants/routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DeoptoRoutes.HOME },
  { path: DeoptoRoutes.HOME, loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)  },
  { path: DeoptoRoutes.DAPP, loadChildren: () => import('./dapp/dapp.module').then(m => m.DappModule) },
  { path: '**', redirectTo: DeoptoRoutes.HOME }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
