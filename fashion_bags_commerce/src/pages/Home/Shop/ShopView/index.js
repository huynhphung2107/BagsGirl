import React, { Fragment, useEffect, useState } from 'react';
import { Image } from 'antd';
import fullProductAPI from '~/api/client/fullProductAPI';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

library.add(faShoppingCart);

function ShopView({ titleContent }) {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  const onAddtoCartHandler = (product) => {
    if (cart.indexOf(product) !== -1) return null;
    const arr = [...cart];
    product.amount = 1;
    arr.push(product);
    setCart([...arr]);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  useEffect(() => {
    getAll();
    console.log(cart);
  }, []);

  const getAll = async () => {
    try {
      const response = await fullProductAPI.getAll();
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const detailProduct = async (productId) => {
    try {
      const response = await fullProductAPI.findById(productId);
      const data = response.data;

      // Process or use the product data as needed
      console.log('Product details:', data);

      // You can return the data if needed
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);

      // You might want to handle the error or return an error message
      throw new Error('Error fetching product details');
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div>
          <div className={styles.scrollableList}>
            {data.map((product) => (
              <div key={product.productId} className="col-4">
                <div className={styles.producItem}>
                  <div className={styles.productImage}>
                    <Link to={`/shop/detail/${product.productId}`}>
                      <div className={styles.contentImage}>
                        <Image src={product.img ? product.img.imgUrl : ''}></Image>
                        {/* <div className={styles.cartIcon}>
                            <Link style={{ color: 'white' }} to={'/cart'}>
                              <FontAwesomeIcon
                                style={{ padding: '5px', paddingTop: '10px' }}
                                icon={faShoppingCart}
                                onClick={() => onAddtoCartHandler(product)}
                              />
                            </Link>{' '}
                          </div> */}
                      </div>
                    </Link>
                  </div>
                  <div className={styles.describer}>
                    <span className={styles.productPrice}>
                      <a>
                        <span className={styles.price}>
                          {product.productDetail ? formatCurrency(product.productDetail.retailPrice) : ''}
                        </span>
                      </a>
                    </span>
                    <Link to={`/shop/detail/${product.productId}`}>
                      <div className={styles.productTitle}>
                        {product.productName} {product.brandName}{' '}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ShopView;
