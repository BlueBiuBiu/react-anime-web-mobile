import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { MainTabbarWrapper } from './style'

export default memo(function Index() {
  const [isRecommend, setisRecommend] = useState(false)
  const [isCollect, setisCollect] = useState(true)
  const [isMine, setisMine] = useState(true)

  function switchRecommend() {
    if (isRecommend) {
      setisRecommend(!isRecommend)
      setisCollect(true)
      setisMine(true)
    }
  }
  function switchCollect() {
    if (isCollect) {
      setisCollect(!isCollect)
      setisRecommend(true)
      setisMine(true)
    }
  }
  function switchMine() {
    if (isMine) {
      setisMine(!isMine)
      setisRecommend(true)
      setisCollect(true)
    }
  }
  return (
    <MainTabbarWrapper>
      <div>
        {isRecommend ? <img src={require('@/assets/img/tuijian.svg')} alt="" /> : <img src={require('@/assets/img/tuijian_active.svg')} alt="" />}
        <div>
          <NavLink to="/recommend" onClick={e => switchRecommend()}>推荐</NavLink>
        </div>
      </div>
      <div>
        {isCollect ? <img src={require('@/assets/img/collect.svg')} alt="" /> : <img src={require('@/assets/img/collect_active.svg')} alt="" />}
        <div>
          <NavLink to="/collect" onClick={e => switchCollect()}>收藏</NavLink>
        </div>
      </div>
      <div>
        {isMine ? <img src={require('@/assets/img/mine.svg')} alt="" /> : <img src={require('@/assets/img/mine_active.svg')} alt="" />}
        <div>
          <NavLink to='/mine' onClick={e => switchMine()}>我的</NavLink>
        </div>
      </div>
    </MainTabbarWrapper>
  )
})
