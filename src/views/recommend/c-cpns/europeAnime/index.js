import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import AnimeRecommend from '@/components/content/animeRecommend'
import { getChangeEuropeAnime } from '../store/actionCreators'
import { EuropeAnimeWrapper } from './style'

export default memo(function Index() {

  const { topEuropeAnime } = useSelector(state => ({
    topEuropeAnime: state.getIn(['topRecommendAnime','topEuropeAnime'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangeEuropeAnime('全部', '欧美', '全部', '全部', 1, 9))
  },[dispatch])
  return (
    <EuropeAnimeWrapper>
      <AnimeRecommend info={topEuropeAnime}/>
    </EuropeAnimeWrapper>
  )
})
