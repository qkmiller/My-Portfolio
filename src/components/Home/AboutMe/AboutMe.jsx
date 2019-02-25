import React from 'react';
import Title from '../Title/Title';
import {titleFont} from '../../../Styles';
function AboutMe(){
  return (
    <div>
      <h5 style={titleFont}>About Me</h5>
      <p><span style={{marginLeft: '10px'}}>Thanks </span> for taking the time to visit my portfolio. I am currently a student at Epicodus, a coding bootcamp in Portland, Oregon. My education at Epicodus has given me great core programming fundamentals, and experience with cutting edge frameworks. I decided to attend Epicodus because of my passion for technology and interest in open-source development. I started by familiarizing myself with the command line and Git, while making web-pages using html and CSS. Later, I learned Javascript, then Ruby along with Rails and postgreSQL. I have no doubt about my ability to learn any new technology the programming world has to offer.</p>
      <hr />
      <p>Before web development, I worked as a customer service associate for QFC. I strove for excellence and customer satisfaction in my work as a cashier, making sure I resolve issues thoroughly and professionally. Examples such as informing the customer of the product they are buying and pointing out any problems or caviates. While this experience may not be relevant to my programming skills, it does, however, attest to my core values as a human-being. The many years I spent doing this job shows that I work well with a diverse, fluid, and constantly changing team.</p>
      <hr />
      <p>Music has always been a part of my life. During my highschool years, learning to play my favorite songs on guitar became an obsession. I played in a few bands, playing house shows and venues here and there. After learning to record music on my computer, my passion moved to producing and engineering my own music. This eventually turned into a passion for audio engineering and sound design. The most important parts of this on-going endeavor are the details. Sometimes the smallest changes can make the biggest difference.</p>
      <hr />
      <p>If you would like to know more, please contact me through any of <a>these</a> methods</p>
    </div>
  );
}

export default AboutMe;
