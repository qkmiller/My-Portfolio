import React from 'react';
import PropTypes from 'prop-types';
import {titleFont} from '../../../Styles';

function CurrentlyWorkingOn(props){

  let _userContent = null;

  function handleStateTest(event) {
    event.preventDefault();
    props.onStateTest(_userContent.value);
    _userContent.value = '';
  }

  return (
    <div>
      <h5 style={titleFont}>'What am i currently learning?'</h5>
      <p>Right now i am learning the basics of React. React is a Javascript library that allows the user to easily make responsive web applications. This webpage is made out of React components. React uses Javascrip to generate HTML elements on-the-fly. "State" is a property that manages data for parts of the application, and it allows data to be passed from component to component. Heres an example:</p>
      <p>Add some text here:</p>
      <form onSubmit={handleStateTest}>
        <input
          type='text'
          id='userContent'
          placeholder='Put whatever you want here'
          ref={(input) => {_userContent = input;}}/>
        <br></br>

        <button type='submit'>Apply</button>
        {props.test ? <span> Now check the top of the page!</span>: null}
      </form>
    </div>
  );
}
CurrentlyWorkingOn.propTypes = {
  onStateTest: PropTypes.func,
  text: PropTypes.bool
}
export default CurrentlyWorkingOn;