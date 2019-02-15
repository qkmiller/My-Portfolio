import React from 'react';

const textCenter = {
  textAlign: 'center'
};

function Home(){
  return (
    <div>
      <div className="section white">
        <div className="row container" style={textCenter}>
          <h2 className="header">Quinn Miller</h2>
          <p className="grey-text text-darken-3 lighten-3" >Junior web developer, specializing in backend logic.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
