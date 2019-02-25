import React from 'react';
import Home from './Home/Home';
import Header from './Header/Header';
import TopImage from './TopImage/TopImage';


function App(){
  return (
    <div>
      <Header />
      <TopImage />
      <div className='row container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
