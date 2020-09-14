import React, { memo } from 'react'
import { Carousel } from 'antd'

import { animeModel } from '@/common/animeModel'
import AnimeCover from '@/components/content/animeCover'
import { AnimeModelWrapper } from './style'

export default memo(function index(props) {

  const { title } = props;

  return (
    <AnimeModelWrapper>
      <div className='title'>
        <span className="type">{title}</span>
        <span className="more">查看更多</span>
      </div>
      <Carousel dots={false} className="carousel">
        {
          [0,1].map(item => {
            return (
              <div className="carousel-item">
                {
                  animeModel.slice(item*3,(item+1)*3).map(item => {
                    return (
                      <AnimeCover img={item}/>
                    )
                  })
                }
              </div>
            )
          })
        }
      </Carousel>
    </AnimeModelWrapper>
  )
})
