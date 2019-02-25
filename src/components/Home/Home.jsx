import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import MySkillsList from '../../MySkillsList.json';
import MyWorkList from '../../MyWorkList.json';
import MyWork from '../MyWork/MyWork';
import {Collapsible, CollapsibleItem} from 'react-materialize';

function Home(){
  return (
    <div>
      <Title />
      <Skills skills={MySkillsList}/>
      <AboutMe />
      <MyWork projects={MyWorkList}/>
    </div>
  );
}

export default Home;
