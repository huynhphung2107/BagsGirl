import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../ProductViewer/Table/Table';
import FormBaloEditTonggle from '../ProductEdit/FormCreate/FormBaloEditTonggle';

import './index.css';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  height: 'auto',
};

function ProductViewer() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub5" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh Sách Sản Phẩm" />
        </Header>
        <Content style={contentStyle}>
          <div>
            <FormBaloEditTonggle />
            <TableContent />
          </div>
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default ProductViewer;
