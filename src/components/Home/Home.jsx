import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import MySkillsList from '../../MySkillsList.json';
import MyWorkList from '../../MyWorkList.json';
import MyWork from '../MyWork/MyWork';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import {Parallax} from 'react-materialize';

function Home(){
  return (
    <div>
      <div id='title' className='row container'>
      <Title />
      </div>
      <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
      <div id='skills' className='row container'>
      <Skills skills={MySkillsList} header='My Programming Skills'/>
      </div>
      <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
      <div id='aboutme' className='row container'>
      <AboutMe />
      </div>
      <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
      <div id='mywork' className='row container'>
      <MyWork projects={MyWorkList} header='Recent projects'/>
      </div>
    </div>
  );
}

export default Home;
