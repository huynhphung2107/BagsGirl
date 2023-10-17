import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';


import './staff.css';
import TableContent from './Table/Table';
import FormStaffCreate from '../StaffEdit/FormCreate/FormStaffCreate';
// import FormstaffCreate from '../staffEdit/FormrCreate/FormstaffCreate';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function StaffView() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub5" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh Sách staff" />
        </Header>
        <Content style={contentStyle}>
          <div>
            <FormStaffCreate />
          </div>
          <TableContent />
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default StaffView;
