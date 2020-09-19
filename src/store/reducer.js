import { combineReducers } from 'redux-immutable'
import { reducer as moreAnimeReducer } from '@/components/content/moreAnime/store'
import { reducer as playIndexReducer } from '@/views/player/store'
import { reducer as recommendAnimeReducer } from '@/views/recommend/c-cpns/recommendAnime/store'
import { reducer as topRecommendAnimeReducer } from '@/views/recommend/c-cpns/store'
import { reducer as allAnimeReducer } from '@/views/search/store'

const cReducer = combineReducers({
  moreAnime: moreAnimeReducer,
  playIndex: playIndexReducer,
  recommendAnime: recommendAnimeReducer,
  topRecommendAnime: topRecommendAnimeReducer,
  allAnime: allAnimeReducer
})

export default cReducer