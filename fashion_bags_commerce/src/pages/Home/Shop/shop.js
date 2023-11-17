import { Layout } from 'antd';
import Footer from '../Footer/footerClient';
import Header from '../Header/headerCilent';
import ShopView from './ShopView/shopView';

import styles from './shop.module.scss';
import { Link } from 'react-router-dom';
import ProductFilter from './LocSanPham/locSanPham';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function Shop() {
  return (
   
      <Layout style={{ backgroundColor: 'white' }}>
        <Header></Header>
        {/* <div className={styles.duongDan}>
          <ul className={styles.ul}>
            <span>
              <Link to={'/'}>
                <li className={styles.li}>Trang chủ-- </li>
              </Link>

              <Link to={'/shop'}>
                <li className={styles.li}> cửa hàng</li>
              </Link>
            </span>
          </ul>
        </div> */}
        <div className={styles.container}>
          <ContentLayout>
            {/* <ProductFilter /> */}
            <ShopView />
          </ContentLayout>
        </div>

        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
   
  );
}

export default Shop;
