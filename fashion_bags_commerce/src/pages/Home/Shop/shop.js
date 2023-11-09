import { Layout } from 'antd';
import Footer from '../Footer';
import Header from '../Header';
import ShopView from './ShopView';

import './index.scss';
import LocSanPham from './LocSanPham';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function Shop() {
  return (
    <div className="container-fluid">
      <Layout  className="container-fluid">
        <Header></Header>
        <ContentLayout className="">
          <div className="container">
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
        <FooterLayout className="">
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default Shop;
