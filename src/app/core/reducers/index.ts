import { routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RouterState
} from '@angular/router';

import * as fromHomeReducer from '../home/reducers/home.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface RootState {
  // router: fromRouter.RouterReducerState<RouterStateUrl>;
  home: fromHomeReducer.Home;
}

export const reducers: ActionReducerMap<RootState> = {
  // router: routerReducer,
  home: fromHomeReducer.HomeReducer
};
