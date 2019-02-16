import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';

function Home(){
  return (
    <div>
      <div className="section white">
        <div className="row container">
          <Title />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Home;
