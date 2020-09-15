import React, { memo, useState } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

import { MoreAnimeWrapper } from './style'

const Index = memo(function Index(props) {
  const [placeIndex, setplaceIndex] = useState(0)
  const [typeIndex, settypeIndex] = useState(0)
  const [birthIndex, setbirthIndex] = useState(0)
  const animePlace = ['全部', '日本', '国内', '欧美']
  const animeType = ['全部', '恋爱', '竞技', '校园', '热血', '青春', '搞笑', '玄幻']
  const animeBirth = ['全部', '2020', '2019', '2018', '2017', '2016', '2015',
    '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004',
    '2003', '2002', '2001', '2000', '90年代', '80年代', '更早']
  return (
    <MoreAnimeWrapper>
      <div className="title">
        <LeftOutlined className="icon" style={{ color: "white", fontSize: 15 }} onClick={e => jumpToBefore()}/>
        <span className="anime">动漫</span>
      </div>
      <div className="tabControl">
        <div>
          {
            animePlace.map((item, index) => {
              return (
                <span key={item} onClick={e => jumpToPlace(index)} className={index===placeIndex? "active": ""}>
                  {item}
                </span>
              )
            })
          }
        </div>
        <div>
          {
            animeType.map((item, index) => {
              return (
                <span key={item} onClick={e => jumpToType(index)} className={index===typeIndex? "active": ""}>
                  {item}
                </span>
              )
            })
          }
        </div>
        <div>
          {
            animeBirth.map((item, index) => {
              return (
                <span key={item} onClick={e => jumpToBirth(index)} className={index===birthIndex? "active": ""}>
                  {item}
                </span>
              )
            })
          }
        </div>
      </div>
    </MoreAnimeWrapper>
  )
  function jumpToBefore(){
    props.history.go(-1)
  }

  function jumpToPlace(index) {
    setplaceIndex(index)
  }

  function jumpToType(index) {
    settypeIndex(index)
  }

  function jumpToBirth(index) {
    setbirthIndex(index)
  }
})

export default withRouter(Index)
