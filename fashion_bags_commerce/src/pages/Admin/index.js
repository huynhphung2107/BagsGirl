import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  borderLeft: '270px',
  color: '#fff',
  height: 'auto',
  paddingInline: 0,
  lineHeight: '64px',
  backgroundColor: '#fff',
  padding: '30px',
};
const contentStyle = {
  lineHeight: '120px',
  color: 'black',
  backgroundColor: '#f3f4f3',
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

function Admin() {
  return (
    <Layout style={{ height: '100vh', background: '#f4f3f4' }}>
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="1" openKey="sub1" />
      </Sider>
      <Layout style={layoutContent}>
        <Header style={headerStyle}>
          <HeaderContent />
        </Header>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Footer style={footerStyle}>Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
