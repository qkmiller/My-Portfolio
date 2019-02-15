import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const brandText = <span className="black-text" style={{marginLeft: '50px'}}>Quinn Miller</span>;
const aboutMeLink = <span className="black-text">About Me</span>;
const myWorkLink = <span className="black-text">My Work</span>;


function Header(){
  return (
    <div>
      <Navbar className='black-text white' brand={brandText} right>
        <NavItem onClick={() => console.log('test click')}>{aboutMeLink}</NavItem>
        <NavItem onClick={() => console.log('test click')}>{myWorkLink}</NavItem>
      </Navbar>
    </div>
  );
}

export default Header;
