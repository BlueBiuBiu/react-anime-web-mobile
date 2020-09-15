import React, { memo } from 'react'
import { withRouter } from 'react-router-dom'

import { AnimeRecommendWrapper } from './style'
import { animeRecommend } from '@/common/animeRecommend'
import AnimeCover from '@/components/content/animeCover'

const Index = memo(function index(props) {
  return (
    <AnimeRecommendWrapper>
      <div className='title'>
        <span className="type">热门推荐</span>
        <span className="more" onClick={e => JumpToMore()}>查看更多</span>
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

  function JumpToMore(){
    props.history.push('/more')
  }

})

export default withRouter(Index)