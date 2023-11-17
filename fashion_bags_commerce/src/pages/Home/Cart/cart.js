import { Layout } from 'antd';
import Header from '../Header/headerCilent';
import Footer from '../Footer/footerClient';
import styles from './cart.module.scss';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/cartItem';
import { useEffect, useState } from 'react';
import { DoubleRightOutlined } from '@ant-design/icons';
import AddressVietnam from '~/api/addressVietNam/apiAddress';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;

function CartView() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem('temporaryCart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    }
  }, []);

  return (
    <div>
      <Layout style={{ background: 'white' }}>
        <Header className={styles.header}></Header>
        {/* <div className={styles.duongDan}>
          <ul className={styles.ul}>
            <span>
              <Link to={'/'}>
                <li className={styles.li}>Trang chủ-- </li>
              </Link>

              <Link to={'/cart'}>
                <li className={styles.li}>giỏ hàng</li>
              </Link>
            </span>
          </ul>
        </div> */}

        <div className="container-fluid">
          <ContentLayout>
            {cartItems.length === 0 ? (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'gray', margin: '50px 0 0 0' }}>Bạn chưa có sản phẩm nào trong giỏ hàng.. </h3>
                <Link to={'/shop'} className={styles.continue_cart}>
                  <span>
                    Tiếp tục mua sắm <DoubleRightOutlined />
                  </span>
                </Link>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <CartItem />
               <AddressVietnam/>
              </div>
            )}
          </ContentLayout>
        </div>

        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default CartView;
