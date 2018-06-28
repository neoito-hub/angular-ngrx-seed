import { Action } from '@ngrx/store';

export const LOAD = '[Home] Load';
export const LOAD_SUCCESS = '[Home] Load Success';
export const LOAD_FAIL = '[Home] Load Fail';

export class LoadHome implements Action {
  readonly type = LOAD;
}
export class LoadHomeSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: any) {}
}
export class LoadHomeFail implements Action {
  readonly type = LOAD_FAIL;
}

// action types
export type HomeAction = LoadHome | LoadHomeSuccess | LoadHomeFail;
