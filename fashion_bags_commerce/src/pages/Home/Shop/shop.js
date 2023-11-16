import { Layout } from 'antd';
import Footer from '../Footer';
import Header from '../Header';
import ShopView from './ShopView';

import './index.scss';
import { Link } from 'react-router-dom';
import ProductFilter from './LocSanPham';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function Shop() {
  return (
    <div>
      <Layout>
        <Header></Header>
        <div className="duongDan">
          <ul className="ul">
            <span>
              <Link to={'/'}>
                <li className="li">Trang chủ-- </li>
              </Link>

              <Link to={'/shop'}>
                <li className="li"> cửa hàng</li>
              </Link>
            </span>
          </ul>
        </div>
        <div className="container">
          <ContentLayout style={{ backgroundColor: 'white' }}>
            <ProductFilter />
            <ShopView />
          </ContentLayout>
        </div>

        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default Shop;
