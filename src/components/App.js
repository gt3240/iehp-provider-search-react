import React from 'react';
import PropTypes from 'prop-types';
//import Header from './common/Header';
//import SideMenu from './sideMenu/SideMenu';
//import { Collapse } from 'react-collapse';

// This is a class-based component because the current version of hot reloading
// won't hot reload a stateless component at the top-level.
class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showSearchBar: false
    }

    //this.onShowCode = this.onShowCode.bind(this);
  }
  render() {
    return (
      <div className="row">       
        <div className="col-sm-12">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
