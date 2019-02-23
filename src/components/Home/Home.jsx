import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import MySkills from '../../MySkills.json';
import {Collapsible} from 'react-materialize';

function Home(){
  return (
    <div>
      <Title />
      <Collapsible popout defaultActiveKey={1} style={{textAlign: 'center'}}>
        <Skills skills={MySkills}/> 
      </Collapsible>
    </div>
  );
}

export default Home;
