import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { LeftOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'

import { MoreAnimeWrapper } from './style'
import { getMoreAnime } from './store/actionCreators'
import AnimeCover from '@/components/content/animeCover'

const Index = memo(function Index(props) {
  const [placeIndex, setplaceIndex] = useState(0)
  const [typeIndex, settypeIndex] = useState(0)
  const [birthIndex, setbirthIndex] = useState(0)
  const [rankIndex, setrankIndex] = useState(0)
  const [size, setsize] = useState(15)
  const [place, setplace] = useState('全部')
  const [type, settype] = useState('全部')
  const [birth, setbirth] = useState('全部')

  const animePlace = ['全部', '日本', '国内', '欧美']
  const animeType = ['全部', '恋爱', '竞技', '校园', '热血', '青春', '搞笑', '玄幻']
  const animeBirth = ['全部', '2020', '2019', '2018', '2017', '2016', '2015',
    '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004',
    '2003', '2002', '2001', '2000', '90年代', '80年代', '更早']
  const animeRank = ['最新', '人气', '最热']


  const { moreAnime } = useSelector(state => ({
    moreAnime: state.getIn(['moreAnime', 'moreAnime'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getMoreAnime(type, place, birth, '全部', 1, size))

    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper, {
      click: true,
      scrollX: true,
      useTransition: false,
      freeScroll: true,
      eventPassthrough: 'horizontal',
      pullUpLoad: true
    })
    scroll.on('pullingUp', () => {
      setsize(size + 15)
      dispatch(getMoreAnime(type, place, birth, '全部', 1, size))
      // console.log('-----',size);
      scroll.refresh()
    })
  }, [type, place, birth,size])


  return (
    <div className="wrapper" style={{ position: 'fixed', left: "0", right: "0", top: "0", bottom: "57px", overflow: "hidden" }}>
      <MoreAnimeWrapper>
        <div className="title">
          <LeftOutlined className="icon" style={{ color: "white", fontSize: 15 }} onClick={e => jumpToBefore()} />
          <span className="anime">动漫</span>
        </div>
        <div className="tabControl">
          <div>
            {
              animePlace.map((item, index) => {
                return (
                  <span key={item} onClick={e => jumpToPlace(index)} className={index === placeIndex ? "active" : ""}>
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
                  <span key={item} onClick={e => jumpToType(index)} className={index === typeIndex ? "active" : ""}>
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
                  <span key={item} onClick={e => jumpToBirth(index)} className={index === birthIndex ? "active" : ""}>
                    {item}
                  </span>
                )
              })
            }
          </div>
          <div>
            {
              animeRank.map((item, index) => {
                return (
                  <span key={item} onClick={e => jumpToRank(index)} className={index === rankIndex ? "active" : ""}>
                    {item}
                  </span>
                )
              })
            }
          </div>
        </div>
        <div className="content">
          {
            moreAnime.map((item, index) => {
              return (
                <div className="animeCover"><AnimeCover img={item} /></div>
              )
            })
          }
        </div>
      </MoreAnimeWrapper>
    </div>
  )

  function jumpToBefore() {
    props.history.go(-1)

  }

  function jumpToPlace(index) {
    setplaceIndex(index)
    switch (index) {
      case 0:
        setplace('全部')
        break;
      case 1:
        setplace('日本')
        break;
      case 2:
        setplace('国内')
        break;
      default:
        setplace('欧美')
        break;
    }
  }
  //'全部', '恋爱', '竞技', '校园', '热血', '青春', '搞笑', '玄幻'
  function jumpToType(index) {
    settypeIndex(index)
    switch (index) {
      case 0:
        settype('全部')
        break;
      case 1:
        settype('恋爱')
        break;
      case 2:
        settype('竞技')
        break;
      case 3:
        settype('校园')
        break;
      case 4:
        settype('热血')
        break;
      case 5:
        settype('青春')
        break;
      case 6:
        settype('搞笑')
        break;
      default:
        settype('玄幻')
        break;
    }
  }

  function jumpToBirth(index) {
    setbirthIndex(index)
    switch (index) {
      case 0:
        setbirth('全部')
        break;
      case 1:
        setbirth('2020')
        break;
      case 2:
        setbirth('2019')
        break;
      case 3:
        setbirth('2018')
        break;
      case 4:
        setbirth('2017')
        break;
      case 5:
        setbirth('2016')
        break;
      case 6:
        setbirth('2015')
        break;
      case 7:
        setbirth('2014')
        break;
      case 8:
        setbirth('2013')
        break;
      case 9:
        setbirth('2012')
        break;
      case 10:
        setbirth('2011')
        break;
      case 11:
        setbirth('2010')
        break;
      case 12:
        setbirth('2009')
        break;
      case 13:
        setbirth('2008')
        break;
      case 14:
        setbirth('2007')
        break;
      case 15:
        setbirth('2006')
        break;
      case 16:
        setbirth('2005')
        break;
      case 17:
        setbirth('2004')
        break;
      case 18:
        setbirth('2003')
        break;
      case 19:
        setbirth('2002')
        break;
      case 20:
        setbirth('2001')
        break;
      case 21:
        setbirth('2000')
        break;
      case 22:
        setbirth('90年代')
        break;
      case 23:
        setbirth('80年代')
        break;
      default:
        setbirth('更早')
        break;
    }
  }

  function jumpToRank(index) {
    setrankIndex(index)
  }

})

export default withRouter(Index)
