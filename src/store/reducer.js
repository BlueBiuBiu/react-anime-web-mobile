import { combineReducers } from 'redux-immutable'
import { reducer as moreAnimeReducer } from '@/components/content/moreAnime/store'

const cReducer = combineReducers({
  moreAnime: moreAnimeReducer
})

export default cReducer