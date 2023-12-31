import { Fragment } from 'react';

import styles from './headerCilent.module.scss';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import NoticeHeader from './NoticeHeader/noticeHeader';
import MainHeader from './MainHeader/mainheader';
import NavMenu from './NavMenu/navMenu';
function Header() {
  return (
    <Fragment>
      <NoticeHeader />
      <MainHeader />
      <NavMenu />
    </Fragment>
  );
}

export default Header;
