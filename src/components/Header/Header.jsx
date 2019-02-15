import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {Link} from 'react-router-dom';

const brandText = <span className="black-text" style={{marginLeft: '50px'}}>Quinn Miller</span>;
const aboutMeLink = <Link className="black-text" to="/about-me">About Me</Link>;
const myWorkLink = <Link className="black-text" to="/my-work">My Work</Link>;

function Header(){
  return (
    <div>
      <Navbar className='black-text white' brand={brandText} right>
        <NavItem>{aboutMeLink}</NavItem>
        <NavItem>{myWorkLink}</NavItem>
      </Navbar>
    </div>
  );
}

export default Header;
