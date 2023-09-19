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
} from '@ant-design/icons';
import { Menu } from 'antd';
import Avartar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar/Avartar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  getItem('Dashboard', 'sub1', <MenuFoldOutlined />, [
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/admin'}>
        Welcome
      </Link>,
      '1',
    ),
    getItem('Main Menu', '2'),
    getItem('Hi, Tuấn Anh', '3'),
  ]),
  getItem('Quản Lí Bán Hàng', 'sub2', <ShoppingCartOutlined />, [
    getItem('Bán Hàng tại Quầy', '5'),
    getItem('Quản lí Đặt Hàng', '6'),
    getItem('Submenu', 'sub3', <AppstoreOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Quản lí Hóa Đơn', 'sub4', <PaperClipOutlined />, [
    getItem('Hóa Đơn hôm nay', '9'),
    getItem('Chỉnh sửa Hóa Đơn', '10'),
    getItem('Xuất Hóa Đơn', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Quản lí Sản Phẩm', 'sub5', <CalendarOutlined />, [
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/product-viewer'}>
        Danh sách Sản Phẩm
      </Link>,
      '13',
    ),
    getItem('Option 10', '14'),
    getItem('Option 11', '15'),
    getItem('Option 12', '16'),
  ]),
  getItem('Quản lí Khuyến Mãi', 'sub6', <RedEnvelopeOutlined />, [
    getItem('Danh sách voucher', '17'),
    getItem('Option 10', '18'),
    getItem('Option 11', '19'),
    getItem('Option 12', '20'),
  ]),
  getItem('Quản lí Nhân Viên', 'sub7', <UserOutlined />, [
    getItem('Option 9', '21'),
    getItem('Option 10', '22'),
    getItem('Option 11', '23'),
    getItem('Option 12', '24'),
  ]),
  getItem('Quản lí Tài Khoản', 'sub8', <TeamOutlined />, [
    getItem('Option 9', '25'),
    getItem('Option 10', '26'),
    getItem('Option 11', '27'),
    getItem('Option 12', '28'),
  ]),
  getItem('Giao Ca', 'sub10', <ContactsOutlined />, [
    getItem(
      <Link style={{ textDecoration: 'none' }} to={'/shift'}>
       Danh sách ca làm việc
      </Link>,
      '33',
    ),
    getItem('Option 10', '34'),
    getItem('Option 11', '35'),
    getItem('Option 12', '36'),
  ]),
  getItem('Thống Kê và Phân Tích', 'sub9', <BarChartOutlined />, [
    getItem('Option 9', '29'),
    getItem('Option 10', '30'),
    getItem('Option 11', '31'),
    getItem('Option 12', '32'),
  ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9','sub10'];
function Sidebar(props) {
  const { key, keyIndex, openKey } = props;
  console.log(keyIndex);
  console.log(openKey);
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
    <div style={{ height: '100vh' }}>
      <div style={{ padding: ' 0px 30px' }}>
        <Avartar />
        <hr />
      </div>
      <Menu
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
