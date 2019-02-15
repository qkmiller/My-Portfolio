import React from 'react';
import {Parallax} from 'react-materialize';

const textCenter = {
  textAlign: 'center'
}

function Home(){
  return (
    <div>
      <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
      <div className="section white">
        <div className="row container" style={textCenter}>
          <h2 className="header">Quinn Miller</h2>
          <p className="grey-text text-darken-3 lighten-3" >Junior web developer, specializing in backend logic.</p>
        </div>
      </div>
      <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
    </div>
  );
}

export default Home;
