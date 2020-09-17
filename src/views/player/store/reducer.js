import _default from '@ant-design/icons/lib/icons/ZoomOutOutlined'
import { Map } from 'immutable'
import * as actionTypes from './constant'

const defaultState = Map({
  playIndex: []
})

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_PLAYER_INDEX:
      return state.set("playIndex",action.playIndex)
    default:
      return state
  }
}

export default reducer