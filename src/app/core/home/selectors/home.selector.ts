// ngrx
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

// app
import { Home } from '../reducers/home.reducer';

export const getHomeFeatureState = createFeatureSelector<Home>('home');

export const getCategoryAndResources = createSelector(
  getHomeFeatureState,
  state => {
    return state.sampleData;
  }
);
