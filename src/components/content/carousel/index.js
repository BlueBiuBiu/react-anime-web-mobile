import React, { memo } from 'react'
import { Carousel } from 'antd'

import { carousel } from '@/common/carousel'
import { CarouselWrapper } from './style'

export default memo(function index() {

  return (
    <CarouselWrapper>
      <Carousel className="carousel" autoplay> 
        {
          carousel.map((item,index) => {
            return(
              <div>
                <img src={item.imgUrl} alt=""/>
              </div>
            )
          })
        }
      </Carousel>
    </CarouselWrapper>
  )
})
