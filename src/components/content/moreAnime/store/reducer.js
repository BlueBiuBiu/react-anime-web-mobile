import { Map } from 'immutable'
import * as actionTypes from './constant'

const defaultStatus = Map({
  moreAnime: []
})

function reducer(state = defaultStatus,action){
  switch(action.type){
    case actionTypes.CHANGE_MORE_ANIME:
      return state.set("moreAnime",action.moreAnime)
    default:
      return state
  }
}

export default reducer