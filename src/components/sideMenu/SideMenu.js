import React from 'react';
//import { Link, IndexLink } from 'react-router';
import Nav from './Nav';

class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {
          name: "Home",
          href: "/",
          selected: true,
          id: 0,
          icon: "fa fa-home",
          subMenu: []
        },
        {
          name: "Forms",
          href: "#",
          selected: false,
          id: 1,
          icon: "fa fa-edit",
          subMenu: [
            {
              name: "General Form",
              href: "/forms/general-form",
              selected: false,
              id: 2,
              subMenu: []
            },
            {
              name: "Form Buttons",
              href: "/forms/form-buttons",
              selected: false,
              id: 3,
              subMenu: []
            }
          ]
        },
        {
          name: "UI Elements",
          href: "#",
          selected: false,
          id: 4,
          icon: "fa fa-desktop",
          subMenu: [
            {
              name: "General Elements",
              href: "/ui-elements/general-elements",
              selected: false,
              id: 5,
              subMenu: []
            },
            {
              name: "Icons",
              href: "/ui-elements/icons",
              selected: false,
              id: 6,
              subMenu: []
            }
          ]
        },
      ]
    };
  }

  onMenuClick(nav) {
    console.log('onMenuClick', nav);
    this.state.menu.map(menuItem => {
      if (menuItem.id === nav.id) {
        menuItem.selected = true;
      } else {
        menuItem.selected = false;
      }
    });
  }

  render() {
    //console.log('side menu', this.state.menu);
    return (
      <div className="side-nav">
        <div className="main_menu_side hidden-print main_menu">
          <ul className="nav side-menu">
            { this.state.menu.map((nav, index)=> <Nav key={ index } nav={ nav } onMenuClick={ this.onMenuClick.bind(this, nav) } />
              ) }
          </ul>
        </div>
      </div>
      );
  }
}

export default SideMenu;