import { Layout } from 'antd';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import './index.scss';
import LoginForm from '../Login/FormLogin/FormLogin/LoginForm';
import { Link } from 'react-router-dom';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function Home() {
  return (
    <Layout>
      <Header></Header>{' '}
      <div className="duongDan">
        <ul className="ul">
          <span>
            <Link to={'/'}>
              <li className="li">Trang chủ</li>
            </Link>
          </span>
        </ul>
      </div>
      <ContentLayout>
        <div className="container-fluid">
          <Content />
        </div>
      </ContentLayout>
      <FooterLayout>
        <Footer></Footer>
      </FooterLayout>
    </Layout>
  );
}

export default Home;
