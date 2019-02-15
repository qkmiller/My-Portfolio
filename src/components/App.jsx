import React from 'react';
import Home from './Home/Home';
import Header from './Header/Header';
import TopImage from './TopImage/TopImage';
import AboutMe from './AboutMe/AboutMe';
import MyWork from './MyWork/MyWork';

import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header />
      <TopImage />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-me' component={AboutMe} />
        <Route exact path='/my-work' component={MyWork} />
      </Switch>
    </div>
  );
}

export default App;
