import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';
import { Layout } from 'antd';
import HeaderContent from '~/component/GlobalStyles/layouts/DefaultLayout/Header';
import TableContent from '../TypeView/TableType/TableType';
import styles from './type.module.scss';
import FormTypeCreate from '../TypeEdit/FormCreate/FormCreateType';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {};

function TypeView() {
    return (
        <Layout className={styles.layout}>
            <Sider width={260} style={{ background: '#fff', zIndex: '999', position: 'fixed', overflowY: 'auto' }}>
                <Sidebar keyIndex="13" openKey="sub5" />
            </Sider>
            <Layout className="layoutContent">
                <Header className="headerStyle">
                    <HeaderContent titlePage="Danh Sách Kiểu Balo" />
                </Header>
                <Content style={contentStyle}>
                    <div>
                        <FormTypeCreate />
                    </div>
                    <TableContent />
                </Content>

                <Footer className="footerStyle">Đây là component của Footer</Footer>
            </Layout>
        </Layout>
    );
}

export default TypeView;
