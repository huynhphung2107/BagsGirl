import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ShopDetailView from './ShopDetailView';
import styles from './shopDetail.module.scss';
const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function ShopDetail() {
  return (
    <div className={styles.backgroundDetail}>
      <Layout>
        <Header></Header>
        <div className="duongDan">
          <ul className="ul">
            <span>
              <Link to={'/'}>
                <li className="li">Trang chủ-- </li>
              </Link>

              <Link to={'/shop/detail'}>
                <li className="li">Chi tiết sản phẩm</li>
              </Link>
            </span>
          </ul>
        </div>
        <ContentLayout>
          <div className="container-fluid">
            <ShopDetailView />
          </div>
        </ContentLayout>
        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default ShopDetail;
