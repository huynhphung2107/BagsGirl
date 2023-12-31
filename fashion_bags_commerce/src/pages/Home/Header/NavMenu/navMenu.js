import { Fragment, useEffect, useState } from 'react';
import styles from './navMenu.module.scss';
import { AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link, useLocation } from 'react-router-dom';
const dataType = [
  { id: 1, name: 'TRANG CHỦ', url: '', urlImage: '' },
  { id: 2, name: 'TMB', url: '', urlImage: '' },
  { id: 3, name: 'THE DREAMWEAVER', url: '', urlImage: '' },
  { id: 4, name: 'COLLECTION', url: '', urlImage: '' },
  { id: 5, name: 'TREND', url: '', urlImage: '' },
  { id: 6, name: 'LUIS VUISTON', url: '', urlImage: '' },
  { id: 7, name: 'ADIAS', url: '', urlImage: '' },
  { id: 8, name: '', url: '', urlImage: 'https://www.vascara.com/uploads/web/900/landing-page/tmb/TMG-logo.png' },
  { id: 9, name: 'PUMA', url: '' },
  { id: 10, name: 'BALO OWEN', url: '', urlImage: '' },
  { id: 11, name: 'BALO ĐỘNG LỰC', url: '', urlImage: '' },
  { id: 12, name: 'BALO THƯỢNG ĐÌNH', url: '', urlImage: '' },
];

function NavMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    // Update selectedKeys when location changes
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const handleMenuClick = ({ key }) => {
    setSelectedKeys([key]);
  };
  return (
    <Fragment>
      <div className={styles.navContent}>
        <div className={styles.centeredMenu}>
          <Menu
            className={styles.menu}
            // style={{ backgroundColor: ' rgb(99, 240, 240)' }}
            mode="horizontal"
            selectedKeys={selectedKeys}
            onClick={({ key }) => handleMenuClick(key)}
          >
            <Link key={1} className={styles.submenu} to={'/'}>
              <SubMenu  title="TRANG CHỦ">
                {/* <Menu.Item key="1.1">NEW ARRIVAL</Menu.Item>
                <Menu.Item key="1.2">COLLECTION</Menu.Item> */}
              </SubMenu>
            </Link>
            <Link className={styles.submenu} to={'/shop'}>
              <SubMenu  title="SẢN PHẨM"></SubMenu>
            </Link>

            <Link className={styles.submenu} to={'#'}>
              <SubMenu  title="GIỚI THIỆU">
                {/* <Menu.Item key="3.1">#GIRLS</Menu.Item>
                <Menu.Item key="3.2">#BOYS</Menu.Item> */}
              </SubMenu>
            </Link>

            <Link className={styles.submenu} to={'/shop'}>
              <SubMenu  title="LIÊN HỆ"></SubMenu>
            </Link>

            <Link className={styles.submenu} to={'/cart'}>
              <SubMenu  title="GIỎ HÀNG"></SubMenu>
            </Link>
          </Menu>
        </div>
      </div>
    </Fragment>
  );
}

export default NavMenu;
