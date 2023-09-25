import { Fragment } from 'react';

import './index.scss';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import NoticeHeader from './NoticeHeader';
import MainHeader from './MainHeader';
import NavMenu from './NavMenu';
function Header() {
  return (
    <Fragment>
      <div className="header">
        <NoticeHeader />
        <MainHeader />
        <NavMenu />
      </div>
    </Fragment>
  );
}

export default Header;
