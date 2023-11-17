import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar/sideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header/header';
import  './admin.module.scss'
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  borderLeft: '270px',
  color: '#fff',
  height: 'auto',
  paddingInline: 0,
  lineHeight: '64px',
  backgroundColor: '#f3f4f3',
  margin: '10px',
};
const contentStyle = {
  lineHeight: '120px',
  margin: '0 30px 10px 20px',
  height: '800px',
  color: 'black',
  backgroundColor: 'lightblue',
};
const footerStyle = {
  margin: '0 10px 10px 20px',
  borderLeft: '270px',
  color: 'black',
  backgroundColor: 'white',
};
const layoutContent = {
  marginLeft: '270px',
  flexGrow: '1',
  backgroundColor: '#f3f4f3',
};

function Admin() {
  return (
    <Layout style={{ height: '100%', background: '#f4f3f4' }}>
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="sub1" openKey="sub1" />
      </Sider>
      <Layout style={layoutContent}>
        <Header style={headerStyle}>
          <HeaderContent titlePage="Trang quản trị" />
        </Header>
        <Content style={contentStyle}>Đây là component của content</Content>

        {/* <Footer style={footerStyle}>Đây là component của Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default Admin;
