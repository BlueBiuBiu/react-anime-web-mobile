import { combineReducers } from 'redux-immutable'
import { reducer as moreAnimeReducer } from '@/components/content/moreAnime/store'
import { reducer as playIndexReducer } from '@/views/player/store'
import { reducer as recommendAnimeReducer } from '@/views/recommend/c-cpns/recommendAnime/store'

const cReducer = combineReducers({
  moreAnime: moreAnimeReducer,
  playIndex: playIndexReducer,
  recommendAnime: recommendAnimeReducer
})

export default cReducer