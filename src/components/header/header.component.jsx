import React from 'react';

import './header.styles.scss';

class Header extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <div className='nav-menus'>
          <div className='nav-brand'>
            <a className='nav-brand-logo' href='/'>
              INSTAGRAM
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
