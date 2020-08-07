import React from 'react';

import Search from './Search';
import {  Route,Switch } from 'react-router-dom';
import About from './About';
import Menu from './Menu';
const App=()=>{

  return(
    <>
    <Menu/>
    <Switch>
      <Route exact  path="/" component={About}/>
      <Route   path="/search" component={Search}/>
    </Switch>
    </>
  )
}

export default App;