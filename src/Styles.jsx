import React from 'react';

const styleNavItemText = function(text) {
  return <span className="black-text">{text}</span>;
};
const styleHeaderTitle = function(text) {
  return <span className="black-text" style={{marginLeft: '50px', textAlign: 'center'}}>{text}</span>;
};
const titleFont = {
  fontFamily: '"Krona One", sans-sarif'
}
export {
  styleNavItemText,
  styleHeaderTitle,
  titleFont
};
