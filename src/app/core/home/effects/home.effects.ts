import { Injectable } from '@angular/core';
//  ngrx
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

// rxjs
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as fromHomeActions from '../actions/home.action';
import * as fromHomeServices from '../services/home.service';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private fromHomeServices: fromHomeServices.HomeService
  ) {}

  @Effect()
  loadHome$ = this.actions$.ofType(fromHomeActions.LOAD).pipe(
    switchMap((action: any) => {
      return this.fromHomeServices.getHome().pipe(
        map(data => {
          return new fromHomeActions.LoadHomeSuccess(data);
        }),
        catchError(error => {
          return of(new fromHomeActions.LoadHomeFail());
        })
      );
    })
  );
}
