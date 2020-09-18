import * as constant from './constant'
import { getAnimeTypePage } from '@/network/anime'

const changeNewAnime = (res) => ({
  type: constant.CHANGE_NEW_ANIME,
  newAnime: res
})

const changeJapanAnime = (res) => ({
  type: constant.CHANGE_JAPAN_ANIME,
  japanAnime: res
})

const changeChineseAnime = (res) => ({
  type: constant.CHANGE_CHINESE_ANIME,
  chineseAnime: res
})

const changeEuropeAnime = (res) => ({
  type: constant.CHANGE_EUROPE_ANIME,
  europeAnime: res
})

const changeAnimeFilm = (res) => ({
  type: constant.CHANGE_ANIME_FILM,
  animeFilm: res
})

export const getChangeNewAnime = (type,place,birth,language,page,size) => {
  return dispatch => {
    getAnimeTypePage(type,place,birth,language,page,size).then(res => {
      dispatch(changeNewAnime(res.content))
    })
  }
}

export const getChangeJapanAnime = (type,place,birth,language,page,size) => {
  return dispatch => {
    getAnimeTypePage(type,place,birth,language,page,size).then(res => {
      dispatch(changeJapanAnime(res.content))
    })
  }
}

export const getChangeChineseAnime = (type,place,birth,language,page,size) => {
  return dispatch => {
    getAnimeTypePage(type,place,birth,language,page,size).then(res => {
      dispatch(changeChineseAnime(res.content))
    })
  }
}

export const getChangeEuropeAnime = (type,place,birth,language,page,size) => {
  return dispatch => {
    getAnimeTypePage(type,place,birth,language,page,size).then(res => {
      dispatch(changeEuropeAnime(res.content))
    })
  }
}

export const getChangeAnimeFilm = (type,place,birth,language,page,size) => {
  return dispatch => {
    getAnimeTypePage(type,place,birth,language,page,size).then(res => {
      dispatch(changeAnimeFilm(res.content))
    })
  }
}