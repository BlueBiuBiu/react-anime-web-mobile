import React, { memo } from 'react'

import AnimeRecommend from '@/components/content/animeRecommend'
import { AnimeFilmWrapper } from './style'

export default memo(function index() {
  return (
    <AnimeFilmWrapper>
      <AnimeRecommend />
    </AnimeFilmWrapper>
  )
})
