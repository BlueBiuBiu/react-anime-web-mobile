import React, { memo } from 'react'
import { withRouter } from 'react-router-dom';

import { AnimeCoverWrapper } from './style'

const Index = memo(function index(props) {
  const { img } = props;
  return (
    <AnimeCoverWrapper>
      <img src={img.imgUrl|| img.img} alt="" onClick={e => jumpToPlayer(img)}/>
      <div className="name">
        {img.name}
      </div>
    </AnimeCoverWrapper>
  )

  function jumpToPlayer(img){
    props.history.push({
      pathname: "/player",
      state: img
    })
  }
})

export default withRouter(Index)
