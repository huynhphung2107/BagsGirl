import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header/headerCilent';
import Footer from '../Footer/footerClient';
import ShopDetailView from './ShopDetailView/shopDetailView';
import styles from './shopDetail.module.scss';
const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function ShopDetail() {
  return (
    <Layout className={styles.backgroundDetail}>
      <Header></Header>
      {/* <div className={styles.duongDan}>
        <ul className={styles.ul}>
          <span>
            <Link to={'/'}>
              <li className={styles.li}>Trang chủ-- </li>
            </Link>

            <Link to={'/shop'}>
              <li className={styles.li}> giỏ hàng</li>
            </Link>
          </span>
        </ul>
      </div> */}
      <ContentLayout>
        <div className="">
          <ShopDetailView />
        </div>
      </ContentLayout>
      <FooterLayout>
        <Footer></Footer>
      </FooterLayout>
    </Layout>
  );
}

export default ShopDetail;
