import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import AnimeRecommend from '@/components/content/animeRecommend'
import { getChangeAnimeFilm } from '../store/actionCreators'
import { AnimeFilmWrapper } from './style'

export default memo(function Index() {

  const { topAnimeFilm } = useSelector(state => ({
    topAnimeFilm: state.getIn(['topRecommendAnime','topAnimeFilm'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangeAnimeFilm('全部', '动漫电影', '全部', '全部', 1, 9))
  },[dispatch])

  return (
    <AnimeFilmWrapper>
      <AnimeRecommend info={topAnimeFilm}/>
    </AnimeFilmWrapper>
  )
})
