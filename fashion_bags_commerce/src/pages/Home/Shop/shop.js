import { Layout } from 'antd';
import Footer from '../Footer';
import Header from '../Header';
import ShopView from './ShopView';

import './index.scss';
import LocSanPham from './LocSanPham';
import { Link } from 'react-router-dom';

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
        <ContentLayout style={{ backgroundColor: 'white' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <LocSanPham />
              </div>
              <div className="col-8">
                <ShopView />
              </div>{' '}
            </div>
          </div>
        </ContentLayout>
        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default Shop;
