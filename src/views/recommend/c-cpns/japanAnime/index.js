import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import AnimeRecommend from '@/components/content/animeRecommend'
import { getChangeJapanAnime } from '../store/actionCreators'
import { JapanAnimeWrapper } from './style'

export default memo(function Index() {

  const { topJapanAnime } = useSelector(state => ({
    topJapanAnime: state.getIn(['topRecommendAnime','topJapanAnime'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangeJapanAnime('全部', '日本', '全部', '全部', 1, 9))
  },[dispatch])

  return (
    <JapanAnimeWrapper>
      <AnimeRecommend info={topJapanAnime}/>
    </JapanAnimeWrapper>
  )
})
