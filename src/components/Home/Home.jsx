import React from 'react';
import Title from '../Title/Title';
import TopImage from '../TopImage/TopImage';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import MySkillsList from '../../MySkillsList.json';
import MyWorkList from '../../MyWorkList.json';
import MyWork from '../MyWork/MyWork';
import {Collapsible, CollapsibleItem} from 'react-materialize';

function Home(){
  return (
    <div>
      <div id='title' className='row container'>
      <Title />
      </div>
      <TopImage />
      <div id='skills' className='row container'>
      <Skills skills={MySkillsList} header='My Programming Skills'/>
      </div>
      <TopImage />
      <div id='aboutme' className='row container'>
      <AboutMe />
      </div>
      <TopImage />
      <div id='mywork' className='row container'>
      <MyWork projects={MyWorkList} header='Recent projects'/>
      </div>
    </div>
  );
}

export default Home;
