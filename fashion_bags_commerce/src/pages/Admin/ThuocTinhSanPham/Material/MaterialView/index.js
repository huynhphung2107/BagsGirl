import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../MaterialView/Table/Table';
import './material.css';
import FormMaterialCreate from '../MaterialEdit/FormCreate/FormMaterialCreate.js';
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function MaterialView() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub5" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh Sách Chất liệu" />
        </Header>
        <Content style={contentStyle}>
          <div>
          {<FormMaterialCreate/>}
          </div>
          <TableContent />
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default MaterialView;