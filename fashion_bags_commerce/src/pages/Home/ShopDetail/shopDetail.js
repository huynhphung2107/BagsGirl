import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ShopDetailView from './ShopDetailView';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function ShopDetail() {
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

              <Link to={'/shop/detail'}>
                <li className="li">Chi tiết sản phẩm</li>
              </Link>
            </span>
          </ul>
        </div>
        <ContentLayout>
          <div className="container-fluid">

            
          </div>
          <ShopDetailView/>
        </ContentLayout>
        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default ShopDetail;
