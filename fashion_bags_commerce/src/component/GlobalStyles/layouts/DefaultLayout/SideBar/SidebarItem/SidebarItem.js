import { memo, useRef, useState } from 'react';
import styles from '../SidebarItem/index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SidebarItem({ item }) {
  const ref = useRef(99);
  const [open, setOpen] = useState(false);
  console.log('open');

  if (item.childrens) {
    return (
      <div className={open ? cx('sidebar-item', 'open') : cx('sidebar-item')}>
        <div className={cx('sidebar-title')} onClick={() => setOpen(!open)}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className={cx('bi-chevron-down', 'toggle-btn')}></i>
        </div>
        <div className={cx('sidebar-content')}>
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || '#'} className={cx('sidebar-item', 'plain')}>
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}

export default memo(SidebarItem);
