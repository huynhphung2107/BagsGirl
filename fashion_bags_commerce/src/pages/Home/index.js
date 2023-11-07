import { Layout } from 'antd';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import './index.scss';
import LoginForm from '../Login/FormLogin/FormLogin/LoginForm';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function Home() {
  return (
    <div>
      <Layout>
        <Header></Header>
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
