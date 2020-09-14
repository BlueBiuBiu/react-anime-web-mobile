import React, { memo } from 'react'

import AnimeModel from '@/components/content/animeModel'
import { RecommendAnimeWrapper } from './style'

export default memo(function index() {
  return (
    <RecommendAnimeWrapper>
      <AnimeModel title="推荐*新番动漫"/>
      <AnimeModel title="推荐*日本动漫"/>
      <AnimeModel title="推荐*国内动漫"/>
      <AnimeModel title="推荐*欧美动漫"/>
      <AnimeModel title="推荐*动漫电影"/>
    </RecommendAnimeWrapper>
  )
})
