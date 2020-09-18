import { Map } from 'immutable'
import * as actionTypes from './constant'

const defaultState = Map({
  newAnime: [],
  japanAnime: [],
  chineseAnime: [],
  europeAnime: [],
  animeFilm: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NEW_ANIME:
      return state.set("newAnime", action.newAnime)
    case actionTypes.CHANGE_JAPAN_ANIME:
      return state.set("japanAnime", action.japanAnime)
    case actionTypes.CHANGE_CHINESE_ANIME:
      return state.set("chineseAnime", action.chineseAnime)
    case actionTypes.CHANGE_EUROPE_ANIME:
      return state.set("europeAnime", action.europeAnime)
    case actionTypes.CHANGE_ANIME_FILM:
      return state.set("animeFilm", action.animeFilm)
    default:
      return state
  }
}

export default reducer