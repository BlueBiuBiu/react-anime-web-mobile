import React, { memo } from 'react'

import { AnimeRecommendWrapper } from './style'
import { animeRecommend } from '@/common/animeRecommend'
import AnimeCover from '@/components/content/animeCover'

export default memo(function index() {
  return (
    <AnimeRecommendWrapper>
      <div className='title'>
        <span className="type">热门推荐</span>
        <span className="more">查看更多</span>
      </div>
      <div className="content">
        {
          animeRecommend.map(item => {
            return (
              <AnimeCover img={item}/>
            )
          })
        }
      </div>
    </AnimeRecommendWrapper>
  )
})
