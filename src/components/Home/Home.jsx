import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import MySkills from '../../MySkills.json';

function Home(){
  return (
    <div>
      <Title />
      <Skills skills={MySkills}/>
    </div>
  );
}

export default Home;
