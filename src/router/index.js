import React from 'react'
import { Redirect } from 'react-router-dom'

import Recommend from '@/views/recommend'
import RecommendAnime from '@/views/recommend/c-cpns/recommendAnime'
import NewAnime from '@/views/recommend/c-cpns/newAnime'
import JapanAnime from '@/views/recommend/c-cpns/japanAnime'
import ChineseAnime from '@/views/recommend/c-cpns/chineseAnime'
import EuropeAnime from '@/views/recommend/c-cpns/europeAnime'
import AnimeFile from '@/views/recommend/c-cpns/animeFilm'

import Collect from '@/views/collect'
import Mine from '@/views/mine'
import Player from '@/views/player'
import Search from '@/views/search'
import MoreAnime from '@/components/content/moreAnime'

export const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/recommend"/>
    )
  },
  {
    path: "/recommend",
    component: Recommend,
    routes: [
      {
        path: '/recommend',
        exact: true,
        render: () => (
          <Redirect to="/recommend/recommendAnime"/>
        )
      },
      {
        path: '/recommend/recommendAnime',
        name: '推荐',
        component: RecommendAnime
      },
      {
        path: '/recommend/newAnime',
        name: '新番动漫',
        component: NewAnime
      },
      {
        path: '/recommend/japanAnime',
        name: '日本动漫',
        component: JapanAnime
      },
      {
        path: '/recommend/chineseAnime',
        name: '国内动漫',
        component: ChineseAnime
      },
      {
        path: '/recommend/europeAnime',
        name: '欧美动漫',
        component: EuropeAnime
      },
      {
        path: '/recommend/animeFilm',
        name: '动漫电影',
        component: AnimeFile
      },
    ]
  },
  {
    path: "/collect",
    component: Collect
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/more",
    component: MoreAnime
  },
  {
    path: "/player",
    component: Player
  },
  {
    path: "/search",
    component: Search
  },
]