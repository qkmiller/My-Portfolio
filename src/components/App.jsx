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
      <div className='section white'>
        <div className='row container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/my-work' component={MyWork} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
