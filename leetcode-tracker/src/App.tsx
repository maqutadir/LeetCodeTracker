import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import { allRoutes } from './config/routes'
import { Header } from './components/Header'

const App: FunctionComponent = () =>  {
  return <>
    <Router>
    <Header/>
      <Routes>
        {allRoutes.map((route, index) => {
          return <Route key={index} path={route.path} element={<route.element/>}/>
        })}
      </Routes>
    </Router>

  </>
}

export default App;
