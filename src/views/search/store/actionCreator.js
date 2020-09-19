import * as constant from './constant'
import { getAllAnime } from '@/network/anime'

export const allAnime = (res) => ({
  type: constant.ALL_ANIME,
  allAnime: res
})

export const getSearchAllAnime = () => {
  return dispatch => {
    getAllAnime().then(res => {
      dispatch(allAnime(res))
    })
  }
}