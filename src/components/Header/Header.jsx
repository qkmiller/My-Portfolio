import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {styleNavItemText, styleHeaderTitle} from '../../Styles';



function Header(){

  return (
    <div>
      <Navbar fixed href='/#/' className='black-text white' brand={styleHeaderTitle('Quinn Miller')} right>
        <NavItem href="#aboutme">{styleNavItemText('About Me')}</NavItem>
        <NavItem href="#mywork">{styleNavItemText('My Work')}</NavItem>
      </Navbar>
    </div>
  );

}

export default Header;
