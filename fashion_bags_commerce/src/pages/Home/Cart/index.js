import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import GioHang from './TableCart/TableCart';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;

function CartView() {
  return (
    <div>
      <Layout>
        <Header className={styles.header}></Header>
        <div className="duongDan">
          <ul className="ul">
            <span>
              <Link to={'/'}>
                <li className="li">Trang chủ-- </li>
              </Link>

              <Link to={'/cart'}>
                <li className="li">giỏ hàng</li>
              </Link>
            </span>
          </ul>
        </div>

        <div className="container-fluid">
          <ContentLayout>
            <div style={{ textAlign: 'center' }}>
              <Link to={'/shop'} className={styles.continue_cart}>
                <span>Tiếp tục mua sắm...</span>
              </Link>
            </div>
            <GioHang />
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
