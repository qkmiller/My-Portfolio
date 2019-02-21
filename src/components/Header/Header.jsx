import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {styleNavItemText, styleHeaderTitle} from '../../Styles';



function Header(){

  return (
    <div>
      <Navbar href='/#/' className='black-text white' brand={styleHeaderTitle('Quinn Miller')} right>
        <NavItem href="/#/about-me">{styleNavItemText('About Me')}</NavItem>
        <NavItem href="/#/my-work">{styleNavItemText('My Work')}</NavItem>
      </Navbar>
    </div>
  );

}

export default Header;
