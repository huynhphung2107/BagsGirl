import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar/sideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header/header';

import TableContent from './Table/tableCustomer';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  borderLeft: '270px',
  color: '#fff',
  height: 'auto',
  paddingInline: 0,
  lineHeight: '64px',
  backgroundColor: '#f3f4f3',
};
const contentStyle = {
  // lineHeight: '120px',
  margin: '0 20px 10px 10px',
  color: 'black',
  backgroundColor: 'lightblue',
};
const footerStyle = {
  margin: '0 10px 10px 20px',
  borderLeft: '270px',
  color: 'black',
  backgroundColor: '#fff',
};
const layoutContent = {
  marginLeft: '270px',
  flexGrow: '1',
  backgroundColor: '#f3f4f3',
};

function CustomerView() {
  return (
    <Layout style={{ height: '100%', background: '#f4f3f4' }}>
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="sub8" openKey="sub8" />
      </Sider>
      <Layout style={layoutContent}>
        <Header style={headerStyle}>
          <HeaderContent titlePage="Danh Sách Khách Hàng" />
        </Header>
        <Content style={contentStyle}>
          <TableContent style={{ boder: 'black solid 1px' }} />
        </Content>

        {/* <Footer className="footerStyle">Đây là component của Footer</Footer> */}
      </Layout>
    </Layout>
  );
}
export default CustomerView;
