import React from 'react';
import Title from '../Title/Title';
import SkillList from '../Skills/SkillList';
import MySkills from '../../MySkills.json';

function Home(){
  return (
    <div>
      <Title />
      <SkillList skills={MySkills}/>
    </div>
  );
}

export default Home;
