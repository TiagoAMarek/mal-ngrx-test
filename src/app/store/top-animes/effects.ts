import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { EffectHandler } from '../effect-handler'
import {
  FetchAnimes,
  ActionTypes,
  FetchAnimesSuccess,
  FetchAnimesFail
} from './actions'

@Injectable()
export class TopAnimeEffects extends EffectHandler {

  constructor(
    protected http: HttpClient,
    protected actions: Actions
  ) {
    super(http, actions)
  }

  @Effect()
  fetchAnimes = this.actions.pipe(
    ofType<FetchAnimes>(ActionTypes.FetchAnimes),
    mergeMap((action: any) => {
      return this.get('/top/anime', action.payload).pipe(
        map((animes: any) => new FetchAnimesSuccess(animes.top)),
        catchError(error => of(new FetchAnimesFail(error)))
      )
    })
  )
}
