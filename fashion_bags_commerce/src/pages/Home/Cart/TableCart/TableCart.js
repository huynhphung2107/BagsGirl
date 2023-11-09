import React, { Fragment } from 'react';
import { Table, Button } from 'antd';

import styles from './index.module.scss';
import { DeleteFilled, DeleteOutlined } from '@ant-design/icons';

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
    width: 400,
  },
  {
    title: 'Đơn giá (VNĐ)',
    dataIndex: 'gia',
    width: 200,
  },
  {
    title: 'Số lượng',
    dataIndex: 'soLuong',
    width: 200,
  },
  {
    title: 'Thành tiền (VNĐ)',
    dataIndex: 'thanhTien',
    render: (_, record) => record.gia * record.soLuong,
    width: 200,
  },
  {
    title: 'Xóa',
    dataIndex: 'xoa',
    render: () => <Button type="danger" icon={<DeleteFilled />} />,
    width: 200,
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
    <div className={styles.container}>
      <h4>Giỏ hàng của bạn</h4>
      <div className="cart">
        <Table className={styles.table_cart} columns={columns} dataSource={data} size="large" bordered />
      </div>
    </div>

    {/* <div>
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div id="div-cartitemmoreforgift" class="cus-note"></div>
          <div className="pp_notify">
            <div className="item-promotion"></div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ul className={styles.total_price}>
            <li>Số lượng</li>
            <li className="price quantitytotal">2</li>
          </ul>
          <ul className={styles.total_price}>
            <li>Giá trị hàng hóa</li>
            <li className={styles.price}>
              <span className="amount pricesellingtotal">2.097.700</span>
              <span className="currency">đ</span>
            </li>
          </ul>
          <ul className={styles.total_price}>
            <li>Phí vận chuyển</li>
            <li className={styles.price}>
              <i>Chưa có</i>
            </li>
          </ul>
          <ul className={styles.total_price}>
            <li>Giảm tiền</li>
            <li className="price sale">
              <span className="amount promotiondiscount">0</span>
              <span className="currency">đ</span>
            </li>
          </ul>
          <ul className={styles.total_price}>
            <li>
              Thành tiền <span>(đã bao gồm VAT)</span>
            </li>
            <li className={styles.price}>
              <span className="amount pricetotal" total="2097700">
                2.097.700
              </span>
              <span className="currency">đ</span>
            </li>
          </ul>
          <a href="javascript:void(0)" className="checkout-cart">
            Tiến hành thanh toán
          </a>
        </div>
      </div>
    </div> */}
  </Fragment>
);

export default TableCart;
