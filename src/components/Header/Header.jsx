import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {navStyle} from '../../Styles';

function Header(){
  return (
    <div>
      <Navbar brand='Quinn Miller' right style={navStyle}>
        <NavItem onClick={() => console.log('test click')}>Link 1</NavItem>
        <NavItem onClick={() => console.log('test click')}>Link 2</NavItem>
      </Navbar>
    </div>
  );
}

export default Header;
