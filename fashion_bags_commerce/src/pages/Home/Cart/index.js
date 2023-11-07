import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import styles from './index.module.scss';
import TableCart from './TableCart/TableCart';
import ShoppingCart from '~/pages/Shopping/shoppingCart';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;

function CartView() {
  return (
    <div>
      <Layout>
        <Header className={styles.header}></Header>

        <ContentLayout className="content">
          <div style={{ textAlign: 'center' }}>
            <h5 className={styles.title}>Hiện chưa có sản phẩm nào trong giỏ hàng của bạn</h5>
            <br></br>
            <a href="/" className={styles.continue_cart}>
              <span>Tiếp tục mua sắm...</span>
            </a>
          </div>
          {/* <TableCart /> */}
          <ShoppingCart />
        </ContentLayout>

        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default CartView;