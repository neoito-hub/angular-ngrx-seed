import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  StoreRouterConfig
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// app
import { reducers } from './root-reducer/index';
import { EffectsModule } from '@ngrx/effects';
import { HomeService } from './home/services/home.service';
import { HomeEffects } from './home/effects/home.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([HomeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  declarations: [],
  providers: [HomeService]
})
export class CoreModule {}
