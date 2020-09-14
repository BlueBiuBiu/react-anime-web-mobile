import React, { memo } from 'react'

import AnimeRecommend from '@/components/content/animeRecommend'
import { NewAnimeWrapper } from './style'

export default memo(function index() {
  return (
    <NewAnimeWrapper>
      <AnimeRecommend />
    </NewAnimeWrapper>
  )
})
