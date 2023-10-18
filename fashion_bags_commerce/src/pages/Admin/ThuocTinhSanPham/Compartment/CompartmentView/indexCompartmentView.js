import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../CompartmentView/TableCompartment/TableCompartment';
import FormCreateCompartment from '../CompartmentEdit/FormCreateCompartment/FormCreateCompartment';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function CompartmentView() {
    return (
        <Layout className="layout">
            <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
                <Sidebar keyIndex="13" openKey="sub5" />
            </Sider>
            <Layout className="layoutContent">
                <Header className="headerStyle">
                    <HeaderContent titlePage="Danh sách ngăn" />
                </Header>
                <Content style={contentStyle}>
                    <div>
                        <FormCreateCompartment />
                    </div>
                    <TableContent />
                </Content>

                <Footer className="footerStyle">Đây là component của Footer</Footer>
            </Layout>
        </Layout>
    );
}

export default CompartmentView;
