import React, { Fragment } from 'react';
import { Table, Button } from 'antd';

import './index.module.scss';
import { DeleteOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Ảnh',
    dataIndex: 'anh',
    render: (anh) => <img src={anh} alt="Ảnh sản phẩm" width={195} height={266} />,
    width: 200,
  },
  {
    title: 'Tên Sản Phẩm',
    dataIndex: 'ten',
    width: 300,
  },
  {
    title: 'Đơn giá (VNĐ)',
    dataIndex: 'gia',
  },
  {
    title: 'Số lượng',
    dataIndex: 'soLuong',
  },
  {
    title: 'Thành tiền (VNĐ)',
    dataIndex: 'thanhTien',
    render: (_, record) => record.gia * record.soLuong,
  },
  {
    title: 'Xóa',
    dataIndex: 'xoa',
    render: () => <Button type="danger" icon={<DeleteOutlined />} />,
  },
];

const data = [
  {
    key: '1',
    anh: 'https://i.imgur.com/7b05uoj.png',
    ten: 'Túi đeo chéo',
    gia: 320000,
    soLuong: 1,
  },
  {
    key: '2',
    anh: 'https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-tote-over-size-quai-doi-that-nut---tot-0129---mau-den__71544__1693428905-medium.jpg   ',
    ten: 'Túi đeo chéo',
    gia: 200000,
    soLuong: 5,
  },
];

const TableCart = () => (
  <Fragment>
    <div className="container">
      <h4>Giỏ hàng của bạn</h4>
      <div className="cart">
        <Table className="table_cart" columns={columns} dataSource={data} size="large" />
      </div>
    </div>
  </Fragment>
);

export default TableCart;
