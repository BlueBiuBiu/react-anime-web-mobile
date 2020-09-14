import React, { memo } from 'react'

import { AnimeCoverWrapper } from './style'

export default memo(function index(props) {
  const { img } = props;
  return (
    <AnimeCoverWrapper>
      <img src={img.imgUrl} alt="" />
      <div className="name">
        {img.name}
      </div>
    </AnimeCoverWrapper>
  )
})
