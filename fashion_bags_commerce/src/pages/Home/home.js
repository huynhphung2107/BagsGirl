import { Layout } from 'antd';
import Content from './Content';
import Footer from './Footer/footerClient';
import Header from './Header/headerCilent';

import styles from'./home.module.scss';
import LoginForm from '../Login/FormLogin/FormLogin/LoginForm';
import { Link } from 'react-router-dom';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function Home() {
  return (
    <Layout style={{ background: 'white' }}>
      <Header></Header>{' '}
      <div className={styles.duongDan}>
        <ul className={styles.ul}>
          <span>
            <Link to={'/'}>
              <li className={styles.li}>Trang chủ</li>
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
