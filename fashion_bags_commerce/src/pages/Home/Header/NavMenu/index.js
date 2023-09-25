import { Fragment, useState } from 'react';
import './index.scss';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
const dataType = [
  { id: 1, name: 'NEW ARRIVAL', url: '', urlImage: '' },
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
            <SubMenu key="subMenu1" title="NEW ARRIVAL">
              <Menu.Item key="1.1">NEW ARRIVAL</Menu.Item>
              <Menu.Item key="1.2">COLLECTION</Menu.Item>
            </SubMenu>
            <SubMenu key="subMenu2" title="COLLECTION">
              <Menu.Item key="2.1" className="textSize">
                THE DREAMWER
              </Menu.Item>
              <Menu.Item key="csc" className="textSize">
                BALO DU LỊCH
              </Menu.Item>
              <Menu.Item key="2.3" className="textSize">
                BALO CÔNG SỞ
              </Menu.Item>
              <Menu.Item key="2.4" className="textSize">
                BALO GIA ĐÌNH
              </Menu.Item>
              <Menu.Item key="2.5" className="textSize">
                BALO FASHION
              </Menu.Item>
            </SubMenu>
            <SubMenu key="subMenu3" title="LUIS VUITON">
              <Menu.Item key="3.1">#GIRLS</Menu.Item>
              <Menu.Item key="3.2">#BOYS</Menu.Item>
            </SubMenu>
            <SubMenu key="subMenu4" title="ADIAS"></SubMenu>
            <SubMenu key="subMenu5" title="PUMA"></SubMenu>
            <SubMenu key="subMenu6" title="NIKE"></SubMenu>
            <SubMenu key="subMenu7" title="LIMITED"></SubMenu>
            <SubMenu key="subMenu8" title="TIN TỨC"></SubMenu>
            <SubMenu key="subMenu90" title="GIFT CARD"></SubMenu>
          </Menu>
        </div>
      </div>
    </Fragment>
  );
}

export default NavMenu;
