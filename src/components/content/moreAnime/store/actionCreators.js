import * as constant from './constant'
import { getAnimeTypePage } from '@/network/anime'

export const changeMoreAnime = (res) => ({
  type: constant.CHANGE_MORE_ANIME,
  moreAnime: res
})

export const getMoreAnime = (type,place,birth,language,page,size) => {
  return dispatch => {
    getAnimeTypePage(type,place,birth,language,page,size).then(res => {
      dispatch(changeMoreAnime(res.content))
    })
  }
}



