import { Action } from '@ngrx/store'

export enum ActionTypes {
  FetchAnimes = 'FETCH_ANIMES',
  FetchAnimesSuccess = 'FETCH_ANIMES_SUCCESS',
  FetchAnimesFail = 'FETCH_ANIMES_FAIL',
}

export class FetchAnimes implements Action {
  readonly type = ActionTypes.FetchAnimes
  constructor(public payload: any) { }
}

export class FetchAnimesSuccess implements Action {
  readonly type = ActionTypes.FetchAnimesSuccess

  constructor(public payload: any) { }
}

export class FetchAnimesFail implements Action {
  readonly type = ActionTypes.FetchAnimesFail

  constructor(public payload: any) { }
}

export type Actions = FetchAnimes | FetchAnimesSuccess | FetchAnimesFail
