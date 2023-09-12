import { Fragment } from 'react';
import items from '../SideBar/data.json';
import SidebarItem from './SidebarItem/SidebarItem.js';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <Fragment>
      <div className={cx('sidebar')}>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </Fragment>
  );
}

export default Sidebar;
