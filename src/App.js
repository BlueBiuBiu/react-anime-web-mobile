import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { routes } from '@/router'

import MainTabbar from '@/components/content/mainTabbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainTabbar />
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
