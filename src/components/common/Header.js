import React from 'react';
//import {Link, IndexLink} from 'react-router';
import logoImg from '../../contents/images/logo.png';

const Header = ({ showSearchBar }) => {
    return (
        <header className="header">
            <img src={logoImg} alt="logo" />
            <span className="header-title">&nbsp;</span>
            <button className="btn" onClick={showSearchBar}>Update Search</button>
        </header>
    );
};

export default Header;