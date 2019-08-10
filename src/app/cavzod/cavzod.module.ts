import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CavzodRoutingModule } from './cavzod-routing.module';
import { CavzodsComponent } from './containers/cavzods/cavzods.component';
import { CavzodComponent } from './containers/cavzod/cavzod.component';
import { CavzodDetailComponent } from './components/cavzod-detail/cavzod-detail.component';
import { CavzodListComponent } from './components/cavzod-list/cavzod-list.component';
import {SharedModule} from '../core/shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {cavzodReducer} from './store/reducers/feature.reducers';
import {EffectsModule} from '@ngrx/effects';
import {CavzodsEffects} from './store/effects/cavzods.effects';



@NgModule({
  declarations: [CavzodsComponent, CavzodComponent, CavzodDetailComponent, CavzodListComponent],
  imports: [
    CommonModule,
    CavzodRoutingModule,
    SharedModule,
    StoreModule.forFeature(`cavzod`, cavzodReducer),
    EffectsModule.forFeature([CavzodsEffects]),
  ]
})
export class CavzodModule { }
