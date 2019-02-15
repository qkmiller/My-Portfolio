import React from 'react';
import Home from './Home/Home';
import Header from './Header/Header';

import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
