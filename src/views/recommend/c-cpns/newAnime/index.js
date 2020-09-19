import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import AnimeRecommend from '@/components/content/animeRecommend'
import { getChangeNewAnime } from '../store/actionCreators'
import { NewAnimeWrapper } from './style'

export default memo(function Index() {

  const { topNewAnime } = useSelector(state => ({
    topNewAnime: state.getIn(['topRecommendAnime','topNewAnime'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangeNewAnime('全部', '全部', '全部', '全部', 1, 9))
  },[dispatch])

  return (
    <NewAnimeWrapper>
      <AnimeRecommend info={topNewAnime}/>
    </NewAnimeWrapper>
  )
})
