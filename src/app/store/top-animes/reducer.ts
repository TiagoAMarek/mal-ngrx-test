import { ActionTypes, Actions } from './actions'

export const topAnimesReducer = (state = [], { type, payload }: Actions) => {

  switch (type) {
    case ActionTypes.FetchAnimesSuccess:
      return [...payload]

    case ActionTypes.FetchAnimesFail:
      return [...payload]

    default:
      return state
  }
}
