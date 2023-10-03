import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Fragment } from 'react';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import ProductAddForm from './ProductAddForm';

function ProductAdd() {
  return (
    <Fragment>
      <Layout className="layout">
        <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
          <Sidebar keyIndex="13" openKey="sub5" />
        </Sider>
        <Layout className="layoutContent">
          <Header className="headerStyle">
            <HeaderContent titlePage="Thêm Sản Phẩm Chi Tiết" />
          </Header>
          <Content>
            <div>
              <ProductAddForm />
            </div>
          </Content>

          <Footer className="footerStyle">Đây là component của Footer</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
}

export default ProductAdd;
