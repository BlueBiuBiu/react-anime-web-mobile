import React, { memo } from 'react'

import AnimeRecommend from '@/components/content/animeRecommend'
import { EuropeAnimeWrapper } from './style'

export default memo(function index() {
  return (
    <EuropeAnimeWrapper>
      <AnimeRecommend />
    </EuropeAnimeWrapper>
  )
})
