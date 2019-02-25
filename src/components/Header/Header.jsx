import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {styleNavItemText, styleHeaderTitle} from '../../Styles';
import quinn from '../../assets/images/quinn.png';

function icon(image) {
  return <img style={{
    width: '80px', 
    borderRadius:'30px', 
    borderWidth: '2px', 
    borderStyle: 'solid', 
    boxShadow: '0px 2px 5px 0 rgba(0,0,0,0.20), 0px 4px 10px 0 rgba(0,0,0,0.20), 0px 3px 8px -2px rgba(0,0,0,0.20)', 
    margin: '10px 10px 10px 10px'}}
    src={image}/>
}

function Header(){

  return (
    <div>
      <Navbar fixed href='/#/' className='black-text white' brand={icon(quinn)} right>
        <NavItem href="#skills">{styleNavItemText('Skills')}</NavItem>
        <NavItem href="#about">{styleNavItemText('About')}</NavItem>
        <NavItem href="#mywork">{styleNavItemText('Projects')}</NavItem>
      </Navbar>
    </div>
  );

}

export default Header;
