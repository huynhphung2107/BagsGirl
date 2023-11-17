import { Layout } from 'antd';
import Header from '../Header/headerCilent';
import Footer from '../Footer/footerClient';
import ShopDetailView from './ShopDetailView/shopDetailView';
import styles from './shopDetail.module.scss';
import { Fragment, useEffect } from 'react';
const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;
function ShopDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <body>
        <div className={styles.fullpage}>
          <div className={styles.header001}>
            <Header />
          </div>
          <div className={styles.page_content}>
            <ShopDetailView />
          </div>
          <div className={styles.footer_client}>
            <Footer />
          </div>
        </div>
      </body>
    </Fragment>
  );
}

export default ShopDetail;
