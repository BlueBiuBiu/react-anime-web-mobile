import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { RecommendAnimeWrapper } from './style'
import {
  getChangeNewAnime,
  getChangeJapanAnime,
  getChangeChineseAnime,
  getChangeEuropeAnime,
  getChangeAnimeFilm
} from './store/actionCreators'
import AnimeModel from '@/components/content/animeModel'


export default memo(function Index() {

  const { 
    newAnime,
    japanAnime,
    chineseAnime,
    europeAnime,
    animeFilm
  } = useSelector(state => ({
    newAnime: state.getIn(['recommendAnime','newAnime']),
    japanAnime: state.getIn(['recommendAnime','japanAnime']),
    chineseAnime: state.getIn(['recommendAnime','chineseAnime']),
    europeAnime: state.getIn(['recommendAnime','europeAnime']),
    animeFilm: state.getIn(['recommendAnime','animeFilm'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangeNewAnime('全部', '全部', '全部', '全部', 1, 6))
    dispatch(getChangeJapanAnime('全部', '日本', '全部', '全部', 1, 6))
    dispatch(getChangeChineseAnime('全部', '国内', '全部', '全部', 1, 6))
    dispatch(getChangeEuropeAnime('全部', '欧美', '全部', '全部', 1, 6))
    dispatch(getChangeAnimeFilm('全部', '动漫电影', '全部', '全部', 1, 6))
  }, [dispatch])

  return (
    <RecommendAnimeWrapper>
      <AnimeModel title="推荐*新番动漫" info={newAnime}/>
      <AnimeModel title="推荐*日本动漫" info={japanAnime}/>
      <AnimeModel title="推荐*国内动漫" info={chineseAnime}/>
      <AnimeModel title="推荐*欧美动漫" info={europeAnime}/>
      <AnimeModel title="推荐*动漫电影" info={animeFilm}/>
    </RecommendAnimeWrapper>
  )
})
