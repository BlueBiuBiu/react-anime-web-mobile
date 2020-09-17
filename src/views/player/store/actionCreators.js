import * as constant from './constant'
import { getAnimePlayIndex } from '@/network/anime'

export const changePlayIndex = (res) => ({
  type: constant.CHANGE_PLAYER_INDEX,
  playIndex: res
})

export const getChangePlayIndex = (id,index) => {
  return dispatch => {
    getAnimePlayIndex(id,index).then(res => {
      dispatch(changePlayIndex(res))
    })
  }
}