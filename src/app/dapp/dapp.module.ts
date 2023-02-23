import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DappRoutingModule } from './dapp-routing.module';
import { DappComponent } from './dapp.component';
import { DappHomeComponent } from './components/dapp-home/dapp-home.component';
import { StopwatchLvl1Component } from './components/stopwatch-lvl1/stopwatch-lvl1.component';
import { StopwatchLvl2Component } from './components/stopwatch-lvl2/stopwatch-lvl2.component';
import { StopwatchLvl3Component } from './components/stopwatch-lvl3/stopwatch-lvl3.component';
import { StopwatchLvl4Component } from './components/stopwatch-lvl4/stopwatch-lvl4.component';
import { StopwatchLvl5Component } from './components/stopwatch-lvl5/stopwatch-lvl5.component';
import { FillLvl1Component } from './components/fill-lvl1/fill-lvl1.component';
import { FillLvl2Component } from './components/fill-lvl2/fill-lvl2.component';
import { FillLvl3Component } from './components/fill-lvl3/fill-lvl3.component';
import { FillLvl4Component } from './components/fill-lvl4/fill-lvl4.component';
import { FillLvl5Component } from './components/fill-lvl5/fill-lvl5.component';
import { DappFooterComponent } from './components/dapp-footer/dapp-footer.component';
import { DappHeaderComponent } from './components/dapp-header/dapp-header.component';

@NgModule({
  declarations: [
    DappHomeComponent,
    StopwatchLvl1Component,
    StopwatchLvl2Component,
    StopwatchLvl3Component,
    StopwatchLvl4Component,
    StopwatchLvl5Component,
    FillLvl1Component,
    FillLvl2Component,
    FillLvl3Component,
    FillLvl4Component,
    FillLvl5Component,
    DappComponent,
    DappFooterComponent,
    DappHeaderComponent
  ],
  imports: [
    CommonModule,
    DappRoutingModule,
    TranslateModule
  ]
})
export class DappModule { }
