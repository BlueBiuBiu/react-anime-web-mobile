import React, { memo } from 'react'

import AnimeRecommend from '@/components/content/animeRecommend'
import { JapanAnimeWrapper } from './style'

export default memo(function index() {
  return (
    <JapanAnimeWrapper>
      <AnimeRecommend />
    </JapanAnimeWrapper>
  )
})
