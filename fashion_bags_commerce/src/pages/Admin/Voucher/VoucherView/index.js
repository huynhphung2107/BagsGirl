import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';

import TableContent from './Table/Table';
import FormVoucherCreate from '../VoucherEdit/FormrCreate/FormVoucherCreate';
// import FormBrandCreate from '../BrandEdit/FormCreate/FormBrandCreate';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function VoucherView() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub6" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh Sách Voucher" />
        </Header>
        <Content style={contentStyle}>
          <div>
            <FormVoucherCreate />
          </div>
          <TableContent />
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default VoucherView;
