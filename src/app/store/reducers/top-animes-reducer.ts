import { ActionTypes, Actions } from '../actions/top-animes.actions'

export const TopAnimesReducer = (state = [], { type, payload }: Actions) => {
  console.log('action', type)

  switch (type) {
    case ActionTypes.FetchAnimesSuccess:
      console.log('a', payload)
      return [...payload]

    case ActionTypes.FetchAnimesFail:
      console.log('b', payload)
      return [...payload]

    default:
      return state
  }
}
