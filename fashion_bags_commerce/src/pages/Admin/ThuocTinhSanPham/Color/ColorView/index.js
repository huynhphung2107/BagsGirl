import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../ColorView/Table/Table';
import FormcolorEditTonggle from '../ColorEdit/FormCreate/FormColorCreate';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function ColorView() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub5" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh Sách Màu sắc" />
        </Header>
        <Content style={contentStyle}>
          <div>
            <FormcolorEditTonggle />
          </div>
          <TableContent />
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default ColorView;
