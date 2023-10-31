import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../BuckleTypeView/TableBuckleType/TableBuckleType';
import FormBuckleTypeCreate from '../BuckleTypeEdit/FormCreateBuckleType/FormCreateBuckleType';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function BuckleTypeView() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub5" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh Sách Kiểu Khóa" />
        </Header>
        <Content style={contentStyle}>
          <div>
            <FormBuckleTypeCreate />
          </div>
          <TableContent />
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default BuckleTypeView;
