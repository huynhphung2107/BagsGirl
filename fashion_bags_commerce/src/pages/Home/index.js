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
    <div className="container-fluid">
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
        <ContentLayout className="content">
          <Content />
        </ContentLayout>
        <FooterLayout>
          <Footer></Footer>
        </FooterLayout>
      </Layout>
    </div>
  );
}

export default Home;
