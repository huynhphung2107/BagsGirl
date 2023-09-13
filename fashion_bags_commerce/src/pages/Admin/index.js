import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout, Space, Menu } from 'antd';
import Avartar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar/Avartar';

const { Header, Footer, Sider, Content } = Layout;
const layout = {
  paddingLeft: '270px',
};
const headerStyle = {
  borderLeft: '270px',
  color: '#fff',
  height: 'auto',
  paddingInline: 0,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const footerStyle = {
  borderLeft: '270px',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const layoutContent = {
  marginLeft: '260px',
  flexGrow: '1',
};

function Admin() {
  return (
    <Layout style={{ height: '100vh', background: '#f4f3f4' }}>
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed' }}>
        <Sidebar />
      </Sider>
      <Layout style={layoutContent}>
        <Header style={headerStyle}>
          Đây là phần component của HeaderĐây là phần component của HeaderĐây là phần component của HeaderĐây là phần
          component của HeaderĐây là phần component của HeaderĐây là phần component của HeaderĐây là phần component của
          Header
        </Header>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Content style={contentStyle}>Đây là component của Content</Content>
        <Footer style={footerStyle}>Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
