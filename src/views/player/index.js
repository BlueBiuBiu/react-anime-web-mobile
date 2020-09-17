import React, { memo, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerWrapper } from './style'
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import BScroll from 'better-scroll'
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl,  // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,  // 倍速播放选项
  VolumeMenuButton
} from 'video-react';
import { withRouter } from 'react-router-dom';

import { getChangePlayIndex } from './store/actionCreators'

const Index = memo(function Index(props) {
  const { state } = props.location;
  const [introduce, setintroduce] = useState(true)
  const [comment, setcomment] = useState(false)
  const [spread, setspread] = useState(true)
  const [index, setindex] = useState(0)
  const totalIndex = state.index.split(",")
  const videoPlayer = useRef()

  const { path } = useSelector(state => ({
    path: state.getIn(['playIndex', 'playIndex'])
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChangePlayIndex(state.id, index))
    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper, {
      click: true,
      scrollX: true,
      eventPassthrough: 'horizontal',
    })
    scroll.on('scroll',(position) => {
      
    })
  }, [state.id, index])

  return (
    <PlayerWrapper>
      <div className="title">
        <LeftOutlined className="icon" style={{ color: "white", fontSize: 15 }} onClick={e => jumpToBefore()} />
        <span className="anime">{state.name}</span>
      </div>
      <Player
        ref={videoPlayer}
        poster={state.img}>
        <source src={path} type="video/mp4" />
        <ControlBar autoHide={false} disableDefaultControls={false}>
          <PlayToggle />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
          <VolumeMenuButton />
        </ControlBar>
      </Player>
      {
        spread &&
        <div className="wrapper" style={{ position: "fixed", bottom: "56px", right: "0", left: "0", top: "230px", overflow: "hidden" }}>
          <div className="tab">
            <div className={classNames({ "active": introduce }, "introduce")} onClick={e => handleIntroduce()}>简介</div>
            <div className={classNames({ "active": comment }, "comment")} onClick={e => handleComment()}>评论</div>
          </div>
          <CSSTransition in={introduce}
            classNames="introduce"
            timeout={300}
            unmountOnExit={false}>
            <div className="totalPlayer">
              <div className="play-title">
                <div>视频</div>
                <div onClick={e => handleSpread()}>展开<RightOutlined /></div>
              </div>
              <div className="play-index">
                {
                  totalIndex.map((item, indey) => {
                    return (
                      <div className={classNames({"index-active": indey === index},"item")} key={item} onClick={e => playIndex(indey)}>{item}</div>
                    )
                  })
                }
              </div>
            </div>
          </CSSTransition>
        </div>
      }
      {
        !spread &&
        <div className="wrapper" style={{ position: "fixed", bottom: "56px", right: "0", left: "0", top: "230px", overflow: "hidden" }}>
          <CSSTransition in={!spread}
            classNames="spread"
            timeout={300}
            unmountOnExit={false}>
            <div className="totalPlayer">
              <div className="play-title-spread">
                <div>视频</div>
                <div onClick={e => handleSpread()}><CloseOutlined /></div>
              </div>
              <div className="play-index-spread">
                {
                  totalIndex.map((item, indey) => {
                    return (
                      <div className={classNames({"index-active": indey === index},"spread-item")} key={item} onClick={e => playIndex(indey)}>{item}</div>
                    )
                  })
                }
              </div>
            </div>
          </CSSTransition>
        </div>
      }
    </PlayerWrapper>
  )

  function jumpToBefore() {
    props.history.go(-1)
  }

  function handleIntroduce() {
    if (introduce === false) {
      setintroduce(true)
      setcomment(false)
    }
  }

  function handleComment() {
    if (comment === false) {
      setcomment(true)
      setintroduce(false)
    }
  }

  function handleSpread() {
    setspread(!spread)
  }

  function playIndex(index) {
    setindex(index)
    videoPlayer.current.load()
  }

})

export default withRouter(Index)
