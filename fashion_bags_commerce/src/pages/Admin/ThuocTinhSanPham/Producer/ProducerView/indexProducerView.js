import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../ProducerView/TableProducer/TableProducer';
import FormCreateProducer from '../ProducerEdit/FormCreateProducer/FormCreateProduer';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function ProducerView() {
  return (
    <Layout className="layout">
      <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
        <Sidebar keyIndex="13" openKey="sub11" />
      </Sider>
      <Layout className="layoutContent">
        <Header className="headerStyle">
          <HeaderContent titlePage="Danh sách nhà sản xuất" />
        </Header>
        <Content style={contentStyle}>
          <div>
          </div>
          <TableContent />
        </Content>

        <Footer className="footerStyle">Đây là component của Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default ProducerView;
