import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const Nav = ({nav, onMenuClick}) => {
    console.log('rendering nav yo.');
    let subMenu = null;
    if (nav.subMenu.length > 0 && nav.selected) {
        subMenu = nav.subMenu.map((subNav, index) => <Nav key={ index } nav={ subNav } />)
    }
    ;
    return (
        <li>
          <Link to={ nav.href } activeClassName="active" onClick={ onMenuClick }>
          {nav.icon && <i className={nav.icon}></i>}
          { nav.name }
          </Link>
          { subMenu &&
            <CSSTransitionGroup transitionName="slide" transitionAppear={ true } transitionAppearTimeout={ 500 } transitionEnterTimeout={ 300 }
              transitionLeaveTimeout={ 300 }>
              <ul className="nav child_menu">
                { subMenu }
              </ul>
            </CSSTransitionGroup> }
        </li>
        );
};

Nav.propTypes = {
    nav: PropTypes.object.isRequired
};

export default Nav;