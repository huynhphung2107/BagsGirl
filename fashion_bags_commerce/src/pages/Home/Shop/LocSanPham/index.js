import React from 'react';
import { Button, Checkbox, Collapse } from 'antd';

import styles from './locSanPham.module.scss';
import { FilterFilled, FilterOutlined, SlidersOutlined } from '@ant-design/icons';
import ShopView from '../ShopView';
const hang = ['adidas', 'nike', 'lumbur'];
const mauSac = ['đỏ', 'đen', 'vàng'];
const kichCo = ['size S', 'size XL', 'size XXL'];
const chatLieu = ['vải cotton', 'vải lụa', 'vải nhung', 'vải nhung'];

const items = [
  {
    key: '0',
    label: 'Bộ Lọc',
    // children: hang.map((item, index) => <Checkbox key={index}>{item}</Checkbox>),
    width: 100,

    default: false,
    showArrow: false,
  },
  {
    key: '1',
    label: 'Hãng',
    children: hang.map((item, index) => (
      <div key={index}  className="checkbox-item">
        <Checkbox>{item}</Checkbox>
        <br />
      </div>
    )),
    width: 100,
  },
  {
    key: '2',
    label: 'Màu sắc',
    children: mauSac.map((item, index) => (
      <div key={index}  className="checkbox-item">
        <Checkbox>{item}</Checkbox>
        <br />
      </div>
    )),
    width: 100,
  },
  {
    key: '3',
    label: 'Kích cỡ',
    children: kichCo.map((item, index) => (
      <div key={index}  className="checkbox-item">
        <Checkbox>{item}</Checkbox>
        <br />
      </div>
    )),
    width: 100,
  },
  {
    key: '4',
    label: 'Chất liệu',
    children: chatLieu.map((item, index) => (
      <div key={index}  className="checkbox-item">
        <Checkbox>{item}</Checkbox>
        <br />
      </div>
    )),
    width: 100,
  },
];
// const LocSanPham = () => {
function LocSanPham() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className={styles.navFilter}>
        <Collapse className={styles.navFilterContent} onChange={onChange} items={items} />;
      </div>
      {/* <ShopView/> */}
    </div>
  );
}
export default LocSanPham;
