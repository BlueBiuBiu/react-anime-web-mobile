import React, { memo } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import Carousel from '@/components/content/carousel'
import { RecommendWrapper } from './style'

const Index = memo(function Index(props) {
  const { routes } = props.route;

  return (
    <RecommendWrapper>
      <div className="recommend">
        {
          routes.map((item, index) => {
            return (
              <div key={item.path} className="recommend-item">
                <NavLink to={item.path} onClick={e => jumpToCenter(e)}>{item.name}</NavLink>
              </div>
            )
          })
        }
      </div>
      <div className="search">
        <Input className="search-input" prefix={<SearchOutlined />}
          bordered={false} placeholder="点击搜索视频"
          onClick={e => handleSearch()}
          style={{
            fontSize: 13,
            color: '#bbb',
          }}
        />
      </div>
      <Carousel />
      {renderRoutes(routes)}
    </RecommendWrapper>
  )

  function handleSearch() {
    props.history.push('/search')
  }

  function jumpToCenter(e) {
    const scrollLeft = e.currentTarget.offsetLeft + 28 - document.body.scrollWidth / 2
    const wrapper = document.querySelector('.recommend')
    wrapper.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    })
  }

})

export default withRouter(Index)
