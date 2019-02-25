import React from 'react';
import {titleFont} from '../../../Styles'

function Title(){
  return (
    <div style={{textAlign: 'center'}}>
      <h2 className="header" style={titleFont}>Quinn Miller</h2>
      <p className="grey-text text-darken-3 lighten-3" >Junior Web Developer | Audio Engineer | Student</p>
    </div>
  );
}

export default Title;
