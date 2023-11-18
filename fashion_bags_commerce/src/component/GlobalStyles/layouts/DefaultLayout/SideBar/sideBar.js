import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  PaperClipOutlined,
  RedEnvelopeOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
  ContactsOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Avartar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar/Avartar/avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.scss';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <Link style={{ textDecoration: 'none' }} to={'/admin'}>
      Trang chủ
    </Link>,
    'sub1',
    <HomeOutlined />,
  ),
  getItem('Quản lý Bán Hàng', 'sub2', <ShoppingCartOutlined />, [
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/sales-counter'}>
        Bán Hàng Tại Quầy
      </Link>,
      '4',
    ),
    getItem('Quản lý Đặt Hàng', '5'),
    getItem('Submenu', 'sub3', <AppstoreOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Quản lý Hóa Đơn', 'sub4', <PaperClipOutlined />, [
    getItem(<Link style={{ textDecoration: 'none' }} to={'/bill-view'}>
      Hóa đơn hôm nay
    </Link>,
      '6',),
    getItem('Chỉnh sửa Hóa Đơn', '7'),
    getItem('Xuất Hóa Đơn', '8'),
    getItem('Option 12', '9'),
  ]),

  getItem(
    <Link style={{ textDecoration: 'none' }} to={'/product-viewer'}>
      Quản lý Sản Phẩm
    </Link>,
    'sub5',
    <CalendarOutlined />,
  ),
  getItem('Danh mục sản phẩm', 'sub11', <AppstoreOutlined />, [
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/color-view'}>
        Màu sắc
      </Link>,
      '12',
    ),
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/brand-view'}>
        Thương hiệu
      </Link>,
      '13',
    ),

    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/size-view'}>
        Kích cỡ
      </Link>,
      '14',
    ),

    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/material-view'}>
        Chất liệu
      </Link>,
      '15',
    ),
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/type-view'}>
        Kiểu balo{' '}
      </Link>,
      '16',
    ),

    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/buckle-type-view'}>
        Kiểu khóa
      </Link>,
      '17',
    ),

    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/compartment-view'}>
        Ngăn
      </Link>,
      '18',
    ),

    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/producer-view'}>
        Nhà sản xuất
      </Link>,
      '19',
    ),
  ]),
  getItem(
    <Link style={{ textDecoration: 'none' }} to={'/voucher-view'}>
      Quản lý Voucher
    </Link>,
    'sub6',
    <RedEnvelopeOutlined />,
  ),
  getItem(
    <Link style={{ textDecoration: 'none' }} to={'/staff-view'}>
      Quản lý Nhân Viên
    </Link>,
    'sub7',
    <UserOutlined />,
  ),
  getItem(
    <Link style={{ textDecoration: 'none' }} to={'/customer-view'}>
      Quản lý Khách Hàng
    </Link>,
    'sub8',
    <TeamOutlined />,
  ),
  getItem('Giao Ca', 'sub10', <ContactsOutlined />, [
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/shift-view'}>
        Danh sách ca làm việc
      </Link>,
      '34',
    ),
    getItem('Option 10', '35'),
    getItem('Option 11', '36'),
    getItem('Option 12', '37'),
  ]),
  getItem('Thống Kê ', 'sub9', <BarChartOutlined />, [
    getItem('Option 9', '38'),
    getItem('Option 10', '39'),
    getItem('Option 11', '40'),
    getItem('Option 12', '41'),
  ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10', 'sub11'];
function Sidebar(props) {
  const { key, keyIndex, openKey } = props;
  const [openKeys, setOpenKeys] = useState([props.openKey]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className={style.sidebar} style={{ height: '100vh' }}>
      <div style={{ padding: ' 0px 30px' }}>
        <Avartar />
        <hr />
      </div>
      <Menu
        className={style.menuCustom}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={[props.keyIndex]}
        defaultOpenKeys={openKeys}
        style={{
          width: '260px',
          height: 'auto',
        }}
        items={items}
      ></Menu>
    </div>
  );
}

export default Sidebar;
