import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import Carousel from '@/components/content/carousel'

import { RecommendWrapper } from './style'

export default memo(function index(props) {
  const { routes } = props.route;
  return (
    <RecommendWrapper>
      <div className="recommend">
        {
          routes.map((item, index) => {
            return (
              <div key={item.path} className="recommend-item">
                <NavLink to={item.path}>{item.name}</NavLink>
              </div>
            )
          })
        }
      </div>
      <div className="search">
        <Input className="search-input" prefix={<SearchOutlined />} 
        bordered={false} placeholder="点击搜索视频" 
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
})
