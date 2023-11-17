import { Table, Image, Button } from 'antd';
import { useEffect, useState } from 'react';
import styles from './tableCart.module.scss';
import vndFormaterFunc from '~/Utilities/VNDFormaterFunc';
import { DeleteFilled, DeleteOutlined, DoubleRightOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function CartItem() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('temporaryCart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.retailPrice;
    }, 0);
  };

  const handleRemoveItem = (record) => {
    const updatedCart = cartItems.filter((item) => item !== record);
    setCartItems(updatedCart);
    localStorage.setItem('temporaryCart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <Image style={{ width: '200px', height: '200px' }} src={record.image} alt={record.productName} />
      ),
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'productName',
      render: (texe, record) => (
        <div className={styles.info_item}>
          <div className={styles.title_product}>
            {' '}
            {record.productName}-{record.productCode}
          </div>
          <ul className={styles.attr}>
            <li>
              {' '}
              <span className={styles.spanTitle}>Màu sắc: </span> {record.colorName}
            </li>

            <li>
              <span className={styles.spanTitle}>Chất liệu: </span>
              {record.materialName}
            </li>
          </ul>
        </div>
      ),
      key: 'productName',
    },
    {
      title: 'Thương hiệu',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: 'Chất liệu',
      dataIndex: 'materialName',
      key: 'materialName',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      render: (text, record) => (
        // <div>
        //   <button onClick={() => handleDecrement(record)}> - </button>
        //   <input type="number" value={record.quantity} onChange={(e) => handleQuantityChange(e, record)} min={1} />
        //   <button onClick={() => handleIncrement(record)}> + </button>
        // </div>

        <div className={' title_attr'}>
          <div className={styles.book_number}>
            <div className={styles.item_change1} onClick={() => handleDecrement(record)}>
              <MinusOutlined />
            </div>
            <input
              disabled
              className={styles.input_amount}
              value={record.quantity}
              id="quantity"
              onChange={(e) => handleQuantityChange(e, record)}
              min={1}
            />
            <div className={styles.item_change2} onClick={() => handleIncrement(record)}>
              <PlusOutlined />
            </div>
          </div>
        </div>
      ),
      key: 'quantity',
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'retailPrice',
      render: (text, record) => vndFormaterFunc(record.retailPrice),
      key: 'retailPrice',
    },
    {
      title: 'Thành tiền',
      render: (text, record) => vndFormaterFunc(record.quantity * record.retailPrice),
      key: 'calculateTotal',
    },
    {
      title: 'Xóa',
      dataIndex: 'operation',
      render: (text, record) => (
        <Button type="link" danger onClick={() => handleRemoveItem(record)}>
          <DeleteFilled />
        </Button>
      ),
      key: 'operation',
    },
  ];

  const handleQuantityChange = (e, record) => {
    const updatedCart = cartItems.map((item) => {
      if (item === record) {
        return { ...item, quantity: parseInt(e.target.value, 10) };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('temporaryCart', JSON.stringify(updatedCart));
  };

  const handleIncrement = (record) => {
    const amountInDatabase = record.amountInDatabase; // Số lượng tồn kho của sản phẩm trong cơ sở dữ liệu

    if (record.quantity + 1 > amountInDatabase) {
      // Hiển thị thông báo khi số lượng vượt quá số lượng trong kho
      alert('Số lượng vượt quá số lượng trong kho!');
    } else {
      const updatedCart = cartItems.map((item) => {
        if (item === record) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedCart);
      localStorage.setItem('temporaryCart', JSON.stringify(updatedCart));
    }
  };

  const handleDecrement = (record) => {
    if (record.quantity > 1) {
      const updatedCart = cartItems.map((item) => {
        if (item === record) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
      localStorage.setItem('temporaryCart', JSON.stringify(updatedCart));
    }
  };
  return (
    <div className="container-fluid" style={{ padding: '0 5% 0 5%' }}>
      <b>
        {' '}
        <Link to={'/shop'} className={styles.continue_cart}>
          Tiếp tục mua sắm <DoubleRightOutlined />
        </Link>
      </b>
      <Table
        bordered
        style={{ textAlign: 'center' }}
        className={styles.table_cart_item}
        dataSource={cartItems}
        columns={columns}
        rowKey="productName"
        footer={() => (
          <div>
            <h3>
              Tổng tiền: <span style={{ color: 'red' }}> {vndFormaterFunc(calculateTotal())}</span>
            </h3>
          </div>
        )}
      />
    </div>
  );
}

export default CartItem;
