import { combineReducers } from 'redux-immutable'
import { reducer as moreAnimeReducer } from '@/components/content/moreAnime/store'
import { reducer as playIndexReducer } from '@/views/player/store'

const cReducer = combineReducers({
  moreAnime: moreAnimeReducer,
  playIndex: playIndexReducer
})

export default cReducer