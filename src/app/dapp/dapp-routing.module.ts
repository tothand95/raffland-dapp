import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DappHomeComponent } from './components/dapp-home/dapp-home.component';
import { FillLvl1Component } from './components/fill-lvl1/fill-lvl1.component';
import { FillLvl2Component } from './components/fill-lvl2/fill-lvl2.component';
import { FillLvl3Component } from './components/fill-lvl3/fill-lvl3.component';
import { FillLvl4Component } from './components/fill-lvl4/fill-lvl4.component';
import { FillLvl5Component } from './components/fill-lvl5/fill-lvl5.component';
import { StopwatchLvl1Component } from './components/stopwatch-lvl1/stopwatch-lvl1.component';
import { StopwatchLvl2Component } from './components/stopwatch-lvl2/stopwatch-lvl2.component';
import { StopwatchLvl3Component } from './components/stopwatch-lvl3/stopwatch-lvl3.component';
import { StopwatchLvl4Component } from './components/stopwatch-lvl4/stopwatch-lvl4.component';
import { StopwatchLvl5Component } from './components/stopwatch-lvl5/stopwatch-lvl5.component';
import { DeoptoDappRoutes } from './constants/dapp.routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DeoptoDappRoutes.HOME },
  { path: DeoptoDappRoutes.HOME, component: DappHomeComponent },
  { path: DeoptoDappRoutes.STOPWATCH_1, component: StopwatchLvl1Component },
  { path: DeoptoDappRoutes.STOPWATCH_2, component: StopwatchLvl2Component },
  { path: DeoptoDappRoutes.STOPWATCH_3, component: StopwatchLvl3Component },
  { path: DeoptoDappRoutes.STOPWATCH_4, component: StopwatchLvl4Component },
  { path: DeoptoDappRoutes.STOPWATCH_5, component: StopwatchLvl5Component },
  { path: DeoptoDappRoutes.FILL_1, component: FillLvl1Component },
  { path: DeoptoDappRoutes.FILL_2, component: FillLvl2Component },
  { path: DeoptoDappRoutes.FILL_3, component: FillLvl3Component },
  { path: DeoptoDappRoutes.FILL_4, component: FillLvl4Component },
  { path: DeoptoDappRoutes.FILL_5, component: FillLvl5Component },
  { path: '**', redirectTo: DeoptoDappRoutes.HOME }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DappRoutingModule { }
