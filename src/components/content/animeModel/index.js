import React, { memo } from 'react'
import { Carousel } from 'antd'

import { animeModel } from '@/common/animeModel'
import AnimeCover from '@/components/content/animeCover'
import { AnimeModelWrapper } from './style'
import { withRouter } from 'react-router-dom'

const Index = memo(function index(props) {

  const { title, info } = props;
  
  return (
    <AnimeModelWrapper>
      <div className='title'>
        <span className="type">{title}</span>
        <span className="more" onClick={e => JumpToMore()}>查看更多</span>
      </div>
      <Carousel dots={false} className="carousel">
        {
          [0,1].map(item => {
            return (
              <div key={item} className="carousel-item">
                {
                  (info || animeModel).slice(item*3,(item+1)*3).map(item => {
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

  function JumpToMore(){
    props.history.push('/more')
  }

})

export default withRouter(Index)