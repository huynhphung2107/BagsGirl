import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Fragment } from 'react';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import SalesCounterForm from './SalesCounterForm';

function SalesCounter() {
  return (
    <Fragment>
      <Layout className="layout">
        <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
          <Sidebar keyIndex="13" openKey="sub5" />
        </Sider>
        <Layout className="layoutContent">
          <Header className="headerStyle">
            <HeaderContent titlePage="Bán Hàng tại quầy" />
          </Header>
          <Content>
            <div>
              <SalesCounterForm />
            </div>
            <Footer className="footerStyle">Đây là component của Footer2</Footer>
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  );
}

export default SalesCounter;
