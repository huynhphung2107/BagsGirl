import { Fragment, useState } from 'react';
import styles from './index.scss';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';
const dataType = [
  { id: 1, name: 'TRANG CHỦ', url: '', urlImage: '' },
  { id: 2, name: 'TMB', url: '', urlImage: '' },
  { id: 3, name: 'THE DREAMWEAVER', url: '', urlImage: '' },
  { id: 4, name: 'COLLECTION', url: '', urlImage: '' },
  { id: 5, name: 'TREND', url: '', urlImage: '' },
  { id: 6, name: 'LUIS VUISTON', url: '', urlImage: '' },
  { id: 7, name: 'ADIAS', url: '', urlImage: '' },
  { id: 7, name: '', url: '', urlImage: 'https://www.vascara.com/uploads/web/900/landing-page/tmb/TMG-logo.png' },
  { id: 7, name: 'PUMA', url: '' },
  { id: 7, name: 'BALO OWEN', url: '', urlImage: '' },
  { id: 7, name: 'BALO ĐỘNG LỰC', url: '', urlImage: '' },
  { id: 7, name: 'BALO THƯỢNG ĐÌNH', url: '', urlImage: '' },
];

function NavMenu() {
  return (
    <Fragment>
      <div className="navContent">
        <div className="centeredMenu">
          <Menu
            className="menu"
            mode="horizontal" // Hoặc mode="horizontal" tùy theo cách bạn sử dụng Menu
            // Sử dụng defaultOpenKeys để mở tất cả các menu con mặc định
          >
            <Link style={{ color: 'black' }} to={'/'}>
              <SubMenu key="subMenu1" title="TRANG CHỦ">
                <Menu.Item key="1.1">NEW ARRIVAL</Menu.Item>
                <Menu.Item key="1.2">COLLECTION</Menu.Item>
              </SubMenu>
            </Link>
            <Link style={{ color: 'black' }} to={'/shop'}>
              <SubMenu key="subMenu2" title="CỬA HÀNG"></SubMenu>
            </Link>

            <Link style={{ color: 'black' }} to={'/cart'}>
              <SubMenu key="subMenu3" title="GIỚI THIỆU">
                <Menu.Item key="3.1">#GIRLS</Menu.Item>
                <Menu.Item key="3.2">#BOYS</Menu.Item>
              </SubMenu>
            </Link>

            <Link style={{ color: 'black' }} to={'/shop'}>
              <SubMenu key="subMenu4" title="LIÊN HỆ"></SubMenu>
            </Link>

            <Link style={{ color: 'black' }} to={'/cart'}>
              <SubMenu key="subMenu5" title="CART"></SubMenu>
            </Link>
          </Menu>
        </div>
      </div>
    </Fragment>
  );
}

export default NavMenu;
