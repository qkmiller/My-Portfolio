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
      <Skills skills={MySkills}/>
      <AboutMe />
      <MyWork />
    </div>
  );
}

export default Home;
