import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import AnimeRecommend from '@/components/content/animeRecommend'
import { getChangeChineseAnime } from '../store/actionCreators'
import { ChineseAnimeWrapper } from './style'

export default memo(function Index() {

  const { topChineseAnime } = useSelector(state => ({
    topChineseAnime: state.getIn(['topRecommendAnime','topChineseAnime'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangeChineseAnime('全部', '国内', '全部', '全部', 1, 9))
  },[dispatch])

  return (
    <ChineseAnimeWrapper>
      <AnimeRecommend info={topChineseAnime}/>
    </ChineseAnimeWrapper>
  )
})
