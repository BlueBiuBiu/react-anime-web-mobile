import React, { memo } from 'react'

import AnimeRecommend from '@/components/content/animeRecommend'
import { ChineseAnimeWrapper } from './style'

export default memo(function index() {
  return (
    <ChineseAnimeWrapper>
      <AnimeRecommend />
    </ChineseAnimeWrapper>
  )
})
