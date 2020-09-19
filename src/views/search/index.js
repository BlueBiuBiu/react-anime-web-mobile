import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { withRouter } from 'react-router-dom'

import { SearchWrapper } from './style'
import { getSearchAllAnime } from './store/actionCreator'

const Index = memo(function Index(props) {
  const [searchContent, setsearchContent] = useState("")
  const [searchResult, setsearchResult] = useState([])
  const [result, setresult] = useState(false)

  const { allAnime } = useSelector(state => ({
    allAnime: state.getIn(['allAnime', 'allAnime'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchAllAnime())
  }, [dispatch])

  return (
    <SearchWrapper>
      <div className="tab">
        <LeftOutlined style={{ color: "#fff", fontSize: 19 }} onClick={e => jumpToBefore()} />
        <Input className="search-input" prefix={<SearchOutlined />}
          bordered={false} placeholder="点击搜索视频"
          onChange={e => inputChange(e)}
          style={{
            fontSize: 13,
            color: '#bbb',
          }}
        />
        <div className="tab-search" onClick={e => handleSearch()}>搜索</div>
      </div>
      {
        searchResult.map((item, index) => {
          return (
            <div className="search" key={item.img}>
              <img src={item.img} alt="" onClick={e => jumpToPlayer(item)} />
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="desc">
                  <div>{item.place}</div>
                  <div>{item.type}</div>
                  <div>{item.year}</div>
                  <div>导演: {item.author}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      {
        result ?
         <img src={require('@/assets/img/result.jpg')} alt="" className="noResult"/>
         : ""
      }
    </SearchWrapper>
  )

  function jumpToBefore() {
    props.history.go(-1)
  }

  function handleSearch() {
    if (searchContent != "") {
      const Result = allAnime.filter(item => {
        if (item.name.includes(searchContent)) {
          return item
        }
      })
      if(Result.length === 0){
        setresult(true)
      } else {
        setresult(false)
      }
      setsearchResult(Result)
    }
  }

  function inputChange(event) {
    setsearchContent(event.target.value)
  }

  function jumpToPlayer(img) {
    props.history.push({
      pathname: "/player",
      state: img
    })
  }

})

export default withRouter(Index)
