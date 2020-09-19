import { Map } from 'immutable'

import * as actionTypes from './constant'

const defaultState = Map({
  allAnime: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ALL_ANIME:
      return state.set('allAnime', action.allAnime)
    default:
      return state
  }
}