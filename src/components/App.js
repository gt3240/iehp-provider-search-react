import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import SideMenu from './sideMenu/SideMenu';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
  
  const leftCol = {
    width: '16%'
  }

  const rightCol={
    width: '80%'
  }

    return (
      <div>
        <Header />
        <div className="col-sm-2 p-0" style={leftCol}>
          <SideMenu />
        </div>
        <div className="col-sm-10" style={rightCol}>
          { this.props.children }
        </div>
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
