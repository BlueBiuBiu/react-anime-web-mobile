import { Map } from 'immutable'
import * as actionTypes from './constant'

const defaultState = Map({
  topNewAnime: [],
  topJapanAnime: [],
  topChineseAnime: [],
  topEuropeAnime: [],
  topAnimeFilm: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NEW_ANIME:
      return state.set("topNewAnime", action.topNewAnime)
    case actionTypes.CHANGE_JAPAN_ANIME:
      return state.set("topJapanAnime", action.topJapanAnime)
    case actionTypes.CHANGE_CHINESE_ANIME:
      return state.set("topChineseAnime", action.topChineseAnime)
    case actionTypes.CHANGE_EUROPE_ANIME:
      return state.set("topEuropeAnime", action.topEuropeAnime)
    case actionTypes.CHANGE_ANIME_FILM:
      return state.set("topAnimeFilm", action.topAnimeFilm)
    default:
      return state
  }
}

export default reducer