import React from 'react';
import Title from './Title/Title';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import MySkillsList from '../../MySkillsList.json';
import MyWorkList from '../../MyWorkList.json';
import MyWork from './MyWork/MyWork';
import CurrentlyWorkingOn from './CurrentlyWorkingOn/CurrentlyWorkingOn'
import {Collapsible, CollapsibleItem} from 'react-materialize';
import {Parallax} from 'react-materialize';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userText: null,
      test: false
    };
    this.handleStateTest = this.handleStateTest.bind(this);
  }

  handleStateTest(userInput){
    this.setState({userText: userInput, test: true});
  }

  resetState() {
    this.setState({userText: null, test: false})
  }

  render() {
    return (
      <div>
        <div id='title' className='row container' style={{width: '400px'}}>
          <Title />
          {this.state.test ? 
            <div style={{textAlign: 'center'}}>
              <h1>{this.state.userText}</h1>
              <p>This is what you typed into the form at the bottom of the page.</p>
              <p>This text resides in the 'state' of a component in this application. This component encapsulates many other components, including the one you entered your text into. Since it's a 'child' of the stateful component, we can pass it a function that enables it to change the state. For a diagram of this unidrectional data-flow, check out the readme for this portfolio on my github.</p>
              <button onClick={()=>{this.resetState()}}>Reset</button>
            </div>: null
          }
        </div>

        
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <div id='skills' className='row container' style={{width: '800px'}}>
          <Skills skills={MySkillsList} header='My Programming Skills'/>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <div id='aboutme' className='row container' style={{width: '800px'}}>
          <AboutMe />
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <div id='mywork' className='row container' style={{width: '800px'}}>
          <MyWork projects={MyWorkList} header='Recent projects'/>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <div id='currentlyworkingon' className='row container' style={{width: '800px'}}>
          <CurrentlyWorkingOn onStateTest={this.handleStateTest} test={this.state.test}/>
        </div>
      </div>
    );
  }
}

export default Home;
