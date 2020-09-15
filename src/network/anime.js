import request from './request'

export function getAnimeTypePage(type,place,birth,language,page,size){
  return request({
    url: '/JapanAnimeSelect/'+String(type)+'/'+String(place)+'/'+String(birth)+'/'+String(language)+'/'+String(page)+'/'+String(size)
  })
}
