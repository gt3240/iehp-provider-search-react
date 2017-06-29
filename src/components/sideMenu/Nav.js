import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Collapse } from 'react-collapse';

const Nav = ({nav, onMenuClick}) => {
    console.log('rendering nav yo.');
    let subMenu = null;
    if (nav.subMenu.length > 0 && nav.selected) {
        subMenu = nav.subMenu.map((subNav, index) => <Nav key={ index } nav={ subNav } />)
    }
    ;
    return (
        <li>
          { nav.href === '/' &&
            <a href="/" onClick={ onMenuClick }>
              <i className={ nav.icon }></i>
              { nav.name }
            </a> }
          { nav.href === '#' &&
            <a href="#" onClick={ onMenuClick }>
              <i className={ nav.icon }></i>
              { nav.name }
            </a> }
          { nav.href !== '#' && nav.href !== '/' &&
            <Link to={ nav.href } onClick={ onMenuClick }>
            <i className={ nav.icon }></i>
            { nav.name }
            </Link> }
          <Collapse isOpened={ nav.selected }>
            <ul className="nav child_menu">
              { subMenu }
            </ul>
          </Collapse>
        </li>
        );
};

Nav.propTypes = {
    nav: PropTypes.object.isRequired
};

export default Nav;