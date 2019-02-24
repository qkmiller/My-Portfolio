import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import MySkills from '../../MySkills.json';
import MyWork from '../MyWork/MyWork';
import {Collapsible, CollapsibleItem} from 'react-materialize';

function Home(){
  return (
    <div>
      <Title />
      <Collapsible popout defaultActiveKey={1} style={{textAlign: 'center'}}>
        <Skills skills={MySkills}/> 
      </Collapsible>
      <Collapsible popout defaultActiveKey={1} style={{textAlign: 'center'}}>
        <CollapsibleItem header='About Me'>
          <AboutMe />
        </CollapsibleItem>
      </Collapsible>
      <Collapsible popout defaultActiveKey={1} style={{textAlign: 'center'}}>
        <CollapsibleItem header='My Work'>
          <MyWork />
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default Home;
