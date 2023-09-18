import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../ProductViewer/Table/Table';

const { Header, Footer, Sider } = Layout;
const headerStyle = {
  borderLeft: '270px',
  color: '#fff',
  height: 'auto',
  paddingInline: 0,
  lineHeight: '64px',
  backgroundColor: '#fff',
  padding: '30px',
};
const footerStyle = {
  borderLeft: '270px',
  color: 'black',
  backgroundColor: '#fff',
};
const layoutContent = {
  marginLeft: '260px',
  flexGrow: '1',
};

function ProductViewer() {
  return (
    <Layout style={{ height: '100vh', background: '#f4f3f4' }}>
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub5" />
      </Sider>
      <Layout style={layoutContent}>
        <Header style={headerStyle}>
          <HeaderContent titlePage="Danh Sách Sản Phẩm" />
        </Header>
        <TableContent />

        <Footer style={footerStyle}>Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default ProductViewer;
