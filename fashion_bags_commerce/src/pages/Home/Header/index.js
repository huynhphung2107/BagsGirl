import { Fragment } from 'react';

import styles from './index.module.scss';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import NoticeHeader from './NoticeHeader';
import MainHeader from './MainHeader';
import NavMenu from './NavMenu';
function Header() {
  return (
    <Fragment>
      <NoticeHeader />
      <div className={styles.container_fluid}>
        <div style={{ backgroundColor: 'white' }}>
          <div className={styles.fixed_header}>
            <MainHeader />
            <NavMenu />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
