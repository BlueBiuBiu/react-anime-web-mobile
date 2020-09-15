import React, {memo} from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import { routes } from '@/router'
import store from './store'

import MainTabbar from '@/components/content/mainTabbar'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTabbar />
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
}

export default memo(App);
